from django.urls import path, include
from rest_framework import routers
from rents import views

router = routers.DefaultRouter()
router.register(r'reservas', views.ReservaView, 'reservas')

urlpatterns = [
    path('api/', include(router.urls)),
]