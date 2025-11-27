from django.db import models
from gestion_citas.models import Cita

class Factura(models.Model):
    cita = models.OneToOneField(Cita, on_delete=models.CASCADE, related_name='factura')
    monto = models.DecimalField(max_digits=10, decimal_places=2)
    fecha = models.DateTimeField(auto_now_add=True)
    ESTADO_FACTURA = [
        ('pendiente', 'Pendiente'),
        ('pagado', 'Pagado'),
        ('generada', 'Generada'),
    ]
    estado = models.CharField(max_length=20, choices=ESTADO_FACTURA, default='pendiente')

    def __str__(self):
        return f"Factura {self.id} - Cita {self.cita.id}"