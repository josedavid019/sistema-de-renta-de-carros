from rest_framework import viewsets
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializer import UserSerializer,LoginSerializer
from .models import User
import jwt
from datetime import datetime, timedelta

SECRET_KEY = 'clave_secreta_para_el_token'


class UserView(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    queryset = User.objects.all()

# Vista para el login
class LoginView(APIView):
    def post(self, request):
        serializer = LoginSerializer(data=request.data)  # Usamos el LoginSerializer
        if serializer.is_valid():
            user = serializer.validated_data["user"]

            # Crear un token JWT con los datos del usuario
            payload = {
                "id": user.id,
                "email": user.email,
                "exp": datetime.utcnow() + timedelta(hours=24)  # Expira en 24 horas
            }
            token = jwt.encode(payload, SECRET_KEY, algorithm="HS256")

            # Retornamos el token y los datos del usuario
            return Response({
                "token": token,
                "user": UserSerializer(user).data
            }, status=status.HTTP_200_OK)

        # Si las credenciales son inválidas
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
