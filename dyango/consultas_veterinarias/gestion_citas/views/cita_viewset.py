from rest_framework import viewsets
from gestion_citas.models import Cita
from gestion_citas.serializers.cita_serializer import CitaSerializer

class CitaViewSet(viewsets.ModelViewSet):
    queryset = Cita.objects.all()
    serializer_class = CitaSerializer
