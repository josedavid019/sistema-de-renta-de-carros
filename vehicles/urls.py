from django.urls import path, include
from rest_framework import routers
from vehicles import views

router = routers.DefaultRouter()
router.register(r'vehicles', views.VehicleView, 'vehicles')

urlpatterns = [
    path('api/', include(router.urls)),
    path('api/categories/', views.VehicleCategoryView.as_view()),
    path('api/statuses/', views.VehicleStatusView.as_view()),
]