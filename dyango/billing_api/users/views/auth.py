# users/views/auth.py
from rest_framework import generics, permissions
from django.contrib.auth.models import User
from users.serializers.register import RegisterSerializer

#con estos se hace el login. se puede ver desde postman
class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = RegisterSerializer
    permission_classes = (permissions.AllowAny,)