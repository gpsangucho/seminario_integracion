from rest_framework import serializers

class MascotaSerializer(serializers.Serializer):
    id = serializers.CharField(read_only = True)
    nombre = serializers.CharField(max_length = 100)
    especie = serializers.CharField(max_length=50)
    edad = serializers.IntegerField()
    cliente_id = serializers.CharField()