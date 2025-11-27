from rest_framework import serializers
from mascotas.models import Mascota

class MascotaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Mascota
        fields = ['id', 'nombre', 'especie', 'raza', 'edad', 'cliente']
