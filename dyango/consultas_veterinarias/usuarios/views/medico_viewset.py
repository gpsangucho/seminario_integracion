from rest_framework import viewsets
from usuarios.models import Medico
from usuarios.serializers.medico_serializer import MedicoSerializer

class MedicoViewSet(viewsets.ModelViewSet):
    queryset = Medico.objects.all()
    serializer_class = MedicoSerializer
