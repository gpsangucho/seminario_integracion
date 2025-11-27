from rest_framework import serializers
from usuarios.models import Medico

class MedicoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Medico
        fields = ['id', 'nombre', 'email', 'telefono', 'especialidad']
