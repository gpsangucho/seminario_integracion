from rest_framework import serializers
from gestion_citas.models import Cita

class CitaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cita
        fields = ['id', 'mascota', 'medico', 'sala', 'fecha','hora','fecha_registro','motivo', 'estado'] 
        #fields: campos a entregar en un GET: del modelo y calculados aqui
        read_only_fields = ['fecha_registro'] # Campos que no recibe de un POST/PUT
