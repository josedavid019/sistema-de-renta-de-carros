from rest_framework import serializers
from .models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

class LoginSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField(write_only=True)

    def validate(self, data):
        email = data.get("email")
        password = data.get("password")

        try:
            # Buscar usuario por email
            user = User.objects.get(email=email)
        except User.DoesNotExist:
            raise serializers.ValidationError("Credenciales inválidas. Usuario no encontrado.")

        # Verificar contraseña
        if not user.check_password(password):
            raise serializers.ValidationError("Credenciales inválidas. Contraseña incorrecta.")

        data["user"] = user
        return data
