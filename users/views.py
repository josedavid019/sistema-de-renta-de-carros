from rest_framework import viewsets
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializer import UserSerializer
from .models import User, Role
from django.contrib.auth.hashers import make_password, check_password
from rest_framework_simplejwt.tokens import RefreshToken

class UserView(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    queryset = User.objects.all()

@api_view(['POST'])
def register_user(request):
    data = request.data
    try:
        role = None
        if 'role' in data:
            role = Role.objects.get(role_id=data['role'])
        else:
            role = Role.objects.get(role_name__iexact="cliente")

        user = User(
            user_username=data['username'],
            user_password=make_password(data['password']),
            user_firstname=data.get('firstname', ''),
            user_secondname=data.get('secondname', ''),
            user_lastname=data.get('lastname', ''),
            user_second_lastname=data.get('second_lastname', ''),
            user_dateofbirth=data.get('dateofbirth'),
            user_cedula=data.get('cedula'),
            user_email=data.get('email'),
            user_phone=data.get('phone', ''),
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
        user = User.objects.get(user_username=data['username'])

        if check_password(data['password'], user.user_password):
            refresh = RefreshToken.for_user(user)
            return Response({
                'refresh': str(refresh),
                'access': str(refresh.access_token),
                'user_id': user.user_id,
                'username': user.user_username,
                'role': user.role.role_name if user.role else None
            })
        else:
            return Response({'error': 'Contraseña incorrecta'}, status=401)

    except User.DoesNotExist:
        return Response({'error': 'Usuario no encontrado'}, status=404)
    except Exception as e:
        return Response({'error': str(e)}, status=500)
