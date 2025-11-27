from django.db import models

class Especialidad(models.Model):
    nombre = models.CharField(max_length=50)
    descripcion = models.CharField(max_length=100, blank=True, null=True)
    tarifa_base = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return self.nombre