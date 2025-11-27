from rest_framework import viewsets
from usuarios.models import Cliente
from usuarios.serializers.cliente_serializer import ClienteSerializer

class ClienteViewSet(viewsets.ModelViewSet):
    queryset = Cliente.objects.all()
    serializer_class = ClienteSerializer
