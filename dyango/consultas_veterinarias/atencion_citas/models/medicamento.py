
from django.db import models
from gestion_citas.models import Cita

class Medicamento(models.Model):
    nombre = models.CharField(max_length=150, unique=True)
    presentacion = models.CharField(max_length=100, blank=True, null=True)
    descripcion = models.TextField(blank=True, null=True)

    def __str__(self):
        return self.nombre