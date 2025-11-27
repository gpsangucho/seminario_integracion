from django.db import models
from usuarios.models import Medico
from mascotas.models import Mascota

class Sala(models.Model):
    
    ESTADOS = [
        ('libre', 'Libre'),
        ('ocupada', 'Ocupada'),
        ('reservada', 'Reservada'),
    ]

    nombre = models.CharField(max_length=50)
    capacidad = models.PositiveIntegerField(default=1)
    ubicacion = models.CharField(max_length=50, blank=True, null=True)
    estado =  models.CharField(max_length=25, choices=ESTADOS, default='libre')

    def __str__(self):
        return self.nombre