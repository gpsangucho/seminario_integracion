from rest_framework import viewsets
from mascotas.models import Mascota
from mascotas.serializers.mascota_serializer import MascotaSerializer

class MascotaViewSet(viewsets.ModelViewSet):
    queryset = Mascota.objects.all()
    serializer_class = MascotaSerializer
