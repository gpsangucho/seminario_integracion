from django.db import models
from atencion_citas.models import HistorialClinico
from atencion_citas.models import Medicamento
#from app.folder import _clase

class Prescripcion(models.Model):
    historial = models.ForeignKey(HistorialClinico, on_delete=models.CASCADE, related_name='prescripciones')
    medicamento = models.ForeignKey(Medicamento, on_delete=models.PROTECT, related_name='prescripciones')
    
    dosis = models.CharField(max_length=100, blank=True, null=True)
    frecuencia = models.CharField(max_length=100, blank=True, null=True)
    duracion = models.CharField(max_length=100, blank=True, null=True)
    indicaciones = models.TextField(blank=True, null=True)
    prescrito_por = models.CharField(max_length=150, blank=True, null=True)
    
    fecha_prescripcion = models.DateTimeField(auto_now_add=True)

    class Meta:
        unique_together = ('historial', 'medicamento', 'dosis', 'frecuencia')

    def __str__(self):
        return f"{self.medicamento.nombre} para historial {self.historial_id}"