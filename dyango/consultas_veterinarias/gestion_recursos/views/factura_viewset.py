from rest_framework import viewsets
from gestion_recursos.models import Factura
from gestion_recursos.serializers.factura_serializer import FacturaSerializer

class FacturaViewSet(viewsets.ModelViewSet):
    queryset = Factura.objects.all()
    serializer_class = FacturaSerializer
