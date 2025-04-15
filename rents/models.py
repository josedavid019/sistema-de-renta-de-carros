from django.db import models

class Reserva(models.Model):
    lugar_recogida = models.CharField(max_length=100)
    fecha_recogida = models.DateField()
    hora_recogida = models.TimeField()
    lugar_devolucion = models.CharField(max_length=100)
    fecha_devolucion = models.DateField()
    hora_devolucion = models.TimeField()

    # def __str__(self):