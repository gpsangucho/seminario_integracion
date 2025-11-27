from rest_framework import serializers
from atencion_citas.models import Prescripcion

class PrescripcionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Prescripcion
        fields = ['id', 'historial', 'medicamento', 'dosis', 'frecuencia', 'duracion', 'indicaciones', 'prescrito_por', 'fecha_prescripcion']
