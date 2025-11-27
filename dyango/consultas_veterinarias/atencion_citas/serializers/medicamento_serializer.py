from rest_framework import serializers
from atencion_citas.models import Medicamento

class MedicamentoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Medicamento
        fields = ['id', 'nombre', 'presentacion', 'descripcion']
