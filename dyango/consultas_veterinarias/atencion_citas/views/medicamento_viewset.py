from rest_framework import viewsets
from atencion_citas.models import Medicamento
from atencion_citas.serializers.medicamento_serializer import MedicamentoSerializer

class MedicamentoViewSet(viewsets.ModelViewSet):
    queryset = Medicamento.objects.all()
    serializer_class = MedicamentoSerializer
