from rest_framework import serializers
from usuarios.models import Cliente

class ClienteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cliente
        fields = ['id', 'nombre', 'email', 'telefono', 'fecha_registro'] # Campos que se enviarán en un GET
        read_only_fields = ['fecha_registro'] # Campos que no recibe de un POST/PUT
        
