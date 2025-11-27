from rest_framework import serializers
from gestion_citas.models import Sala

class SalaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sala
        #fields = ['id', 'nombre', 'ubicacion', 'capacidad', 'estado']
        fields = ['id', 'nombre', 'ubicacion', 'capacidad', 'estado']
