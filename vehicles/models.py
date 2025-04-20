from django.db import models

class VehicleCategory(models.Model):
    category_id = models.AutoField(primary_key=True)
    category_name = models.CharField(max_length=100)
    category_description = models.TextField()

    def __str__(self):
        return self.category_name

class VehicleStatus(models.Model):
    status_id = models.AutoField(primary_key=True)
    status_name = models.CharField(max_length=100)
    status_description = models.TextField()

    def __str__(self):
        return self.status_name

class Vehicles(models.Model):
    vehicle_id = models.AutoField(primary_key=True)
    vehicle_name = models.CharField(max_length=100)
    vehicle_image = models.ImageField(upload_to='vehicles/')
    category = models.ForeignKey(VehicleCategory, on_delete=models.CASCADE)
    status = models.ForeignKey(VehicleStatus, on_delete=models.CASCADE)

    def __str__(self):
        return self.vehicle_name
