from rest_framework.generics import ListAPIView
from .models import Vehicle, VehicleCategory, VehicleStatus
from .serializer import VehicleSerializer, VehicleCategorySerializer, VehicleStatusSerializer
from rest_framework import viewsets

class VehicleCategoryView(ListAPIView):
    queryset = VehicleCategory.objects.all()
    serializer_class = VehicleCategorySerializer

class VehicleStatusView(ListAPIView):
    queryset = VehicleStatus.objects.all()
    serializer_class = VehicleStatusSerializer

class VehicleView(viewsets.ModelViewSet):
    serializer_class = VehicleSerializer
    queryset = Vehicle.objects.all()