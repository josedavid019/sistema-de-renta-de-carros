from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import VehicleCategory, VehicleStatus, Vehicles
from .serializer import VehicleCategorySerializer, VehicleStatusSerializer, VehicleSerializer


class VehicleCategoryView(APIView):
    def get(self, request):
        categories = VehicleCategory.objects.all()
        serializer = VehicleCategorySerializer(categories, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = VehicleCategorySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class VehicleStatusView(APIView):
    def get(self, request):
        statuses = VehicleStatus.objects.all()
        serializer = VehicleStatusSerializer(statuses, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = VehicleStatusSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class VehiclesView(APIView):
    def get(self, request):
        vehicles = Vehicles.objects.all()
        serializer = VehicleSerializer(vehicles, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = VehicleSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
