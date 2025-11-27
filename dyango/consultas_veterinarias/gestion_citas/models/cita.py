from django.db import models
from usuarios.models import Medico
from mascotas.models import Mascota
from .sala import Sala


class Cita(models.Model):
    
    ESTADOS = [
        ('agendada', 'Agendada'),
        ('online', 'Online'),
        ('pendiente', 'Pendiente'),
        ('cancelada', 'Cancelada'),
        ('reagendada', 'Reagendada'),
        ('finalizado', 'Finalizado'),
        ('atendido_reagendado', 'Atendido y Reagendado'),
    ]

    mascota = models.ForeignKey(Mascota, on_delete=models.CASCADE, related_name='citas')
    medico = models.ForeignKey(Medico, on_delete=models.PROTECT, related_name='citas')
    sala = models.ForeignKey(Sala, on_delete=models.PROTECT, related_name='citas')

    
    fecha = models.DateField()          # escogida por el cliente
    hora = models.TimeField()           # escogida por el cliente
    fecha_registro = models.DateTimeField(auto_now_add=True)  # automático

    motivo = models.TextField(blank=True, null=True)
    estado = models.CharField(max_length=25, choices=ESTADOS, default='agendada')

    class Meta:
        unique_together = ('sala', 'fecha', 'hora')
        ordering = ['fecha', 'hora']

    def __str__(self):
        return f"Cita {self.id} - {self.mascota.nombre}"