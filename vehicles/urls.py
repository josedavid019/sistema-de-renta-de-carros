from django.urls import path
from .views import VehicleCategoryView, VehicleStatusView, VehiclesView

urlpatterns = [
    path('categories/', VehicleCategoryView.as_view(), name='vehicle-categories'),
    path('statuses/', VehicleStatusView.as_view(), name='vehicle-statuses'),
    path('vehicles/', VehiclesView.as_view(), name='vehicles'),
]