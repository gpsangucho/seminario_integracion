from rest_framework import viewsets
from gestion_citas.models import Sala
from gestion_citas.serializers.sala_serializer import SalaSerializer

class SalaViewSet(viewsets.ModelViewSet):
    queryset = Sala.objects.all()
    serializer_class = SalaSerializer
