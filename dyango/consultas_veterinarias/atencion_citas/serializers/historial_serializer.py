from rest_framework import serializers
from atencion_citas.models import HistorialClinico

class HistorialClinicoSerializer(serializers.ModelSerializer):
    class Meta:
        model = HistorialClinico
        fields = ['id', 'cita', 'sintomas', 'diagnostico', 'tratamiento', 'fecha_creacion']
