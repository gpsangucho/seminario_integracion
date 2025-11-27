from django.db import models
from usuarios.models import Especialidad

class Medico(models.Model):
    nombre = models.CharField(max_length=100)
    especialidad = models.ForeignKey(Especialidad, on_delete=models.PROTECT)
    email = models.EmailField(unique=True)
    telefono = models.CharField(max_length=20, blank=True, null=True)

    def __str__(self):
        return self.nombre