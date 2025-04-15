from django.urls import path, include
from rest_framework import routers
from users import views

router = routers.DefaultRouter()
router.register(r'users', views.UserView, 'users')

urlpatterns = [
    path('api/', include(router.urls)),
    path('api/login/', views.LoginView.as_view(), name='login'),  # Login
]