from rest_framework import serializers
from gestion_recursos.models import Factura

class FacturaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Factura
        fields = ['id', 'cita', 'monto', 'fecha', 'estado']
