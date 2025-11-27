from django.db import models
from usuarios.models import Cliente

class Mascota(models.Model):
    cliente = models.ForeignKey(Cliente, on_delete=models.CASCADE, related_name='mascotas')
    nombre = models.CharField(max_length=100)
    especie = models.CharField(max_length=50)
    raza = models.CharField(max_length=50, blank=True, null=True)
    edad = models.PositiveIntegerField(blank=True, null=True)

    def __str__(self):
        return self.nombre
