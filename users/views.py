from rest_framework import viewsets
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializer import UserSerializer
from .models import User, Role
from django.contrib.auth.hashers import make_password
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth.hashers import check_password

class UserView(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    queryset = User.objects.all()

@api_view(['POST'])
def register_user(request):
    data = request.data
    try:
        if 'role' in data:
            role = Role.objects.get(id=data['role'])
        else:
            role = Role.objects.get(name__iexact="cliente")

        user = User(
            username=data['username'],
            password=make_password(data['password']),
            role=role
        )
        user.save()
        return Response({"message": "Usuario creado correctamente"})

    except Role.DoesNotExist:
        return Response({"error": "Rol cliente no existe"}, status=400)
    except Exception as e:
        return Response({"error": str(e)}, status=500)
    
@api_view(['POST'])
def login_user(request):
    data = request.data
    try:
        user = User.objects.get(username=data['username'])

        if check_password(data['password'], user.password):
            refresh = RefreshToken.for_user(user)
            return Response({
                'refresh': str(refresh),
                'access': str(refresh.access_token),
                'user_id': user.id,
                'username': user.username,
                'role': user.role.name if user.role else None
            })
        else:
            return Response({'error': 'Contraseña incorrecta'}, status=401)

    except User.DoesNotExist:
        return Response({'error': 'Usuario no encontrado'}, status=404)
    except Exception as e:
        return Response({'error': str(e)}, status=500)
