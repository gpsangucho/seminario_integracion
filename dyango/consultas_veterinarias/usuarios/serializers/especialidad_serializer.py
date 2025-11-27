from rest_framework import serializers
from usuarios.models import Especialidad

class EspecialidadSerializer(serializers.ModelSerializer):
    class Meta:
        model = Especialidad
        fields = ['id', 'nombre', 'descripcion','tarifa_base']
        #read_only_fields = ['_campo']
