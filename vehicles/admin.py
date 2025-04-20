from django.contrib import admin
from .models import VehicleCategory, VehicleStatus, Vehicles

admin.site.register(VehicleCategory)
admin.site.register(VehicleStatus)
admin.site.register(Vehicles)
