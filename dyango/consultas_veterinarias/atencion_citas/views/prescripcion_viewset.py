from rest_framework import viewsets
from atencion_citas.models import Prescripcion
from atencion_citas.serializers.prescripcion_serializer import PrescripcionSerializer

class PrescripcionViewSet(viewsets.ModelViewSet):
    queryset = Prescripcion.objects.all()
    serializer_class = PrescripcionSerializer
