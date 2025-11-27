from django.db import models
from gestion_citas.models import Cita
from .medicamento import Medicamento
#from app.folder import _clase

class HistorialClinico(models.Model):
    #Relacion 1:1 con Cita
    cita = models.OneToOneField(Cita, on_delete=models.CASCADE, related_name='historial')
    # Atributos propios
    sintomas = models.TextField(blank=True, null=True)
    diagnostico = models.TextField(blank=True, null=True)
    tratamiento = models.TextField(blank=True, null=True)
    fecha_creacion = models.DateTimeField(auto_now_add=True)
    
        # Relación N:N con Medicamento a través de la tabla intermedia Prescripcion
    medicamentos = models.ManyToManyField(
        Medicamento,
        through='Prescripcion',
        related_name='historiales'
    )

    def __str__(self):
        return f"Historial cita {self.cita_id}"