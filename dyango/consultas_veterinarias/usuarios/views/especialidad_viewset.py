from rest_framework import viewsets
from usuarios.models import Especialidad
from usuarios.serializers.especialidad_serializer import EspecialidadSerializer

class EspecialidadViewSet(viewsets.ModelViewSet):
    queryset = Especialidad.objects.all()
    serializer_class = EspecialidadSerializer
