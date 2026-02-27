from rest_framework import serializers

class ClienteSerializer(serializers.Serializer):
    id = serializers.CharField(read_only=True)
    nombre = serializers.CharField(max_length = 100)
    apellido = serializers.CharField(max_length = 100)
    telefono = serializers.CharField(max_length = 20)
    email = serializers.EmailField()
    
