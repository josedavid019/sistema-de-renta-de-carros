from rest_framework import viewsets
from .serializer import ReservaSerializer
from .models import Reserva

class ReservaView(viewsets.ModelViewSet):
    serializer_class = ReservaSerializer
    queryset = Reserva.objects.all()