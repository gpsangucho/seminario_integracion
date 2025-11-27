from rest_framework import viewsets
from atencion_citas.models import HistorialClinico
from atencion_citas.serializers.historial_serializer import HistorialClinicoSerializer

class HistorialClinicoViewSet(viewsets.ModelViewSet):
    queryset = HistorialClinico.objects.all()
    serializer_class = HistorialClinicoSerializer
