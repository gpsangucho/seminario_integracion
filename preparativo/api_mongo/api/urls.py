from django.urls import path
from .views.cliente_view import *
from .views.mascota_view import *

urlpatterns = [

    # CLIENTES
    path('clientes/', listar_clientes),
    path('clientes/crear/', crear_cliente),
    path('clientes/<str:id>/', actualizar_cliente),
    path('clientes/<str:id>/eliminar/', eliminar_cliente),

    # MASCOTAS
    path('mascotas/', listar_mascotas),
    path('mascotas/crear/', crear_mascota),
    path('mascotas/<str:id>/', actualizar_mascota),
    path('mascotas/<str:id>/eliminar/', eliminar_mascota),
]