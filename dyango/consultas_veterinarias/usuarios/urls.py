from rest_framework.routers import DefaultRouter
from usuarios.views.cliente_viewset import ClienteViewSet
from usuarios.views.medico_viewset import MedicoViewSet
from usuarios.views.especialidad_viewset import EspecialidadViewSet

router = DefaultRouter()
router.register(r'clientes', ClienteViewSet)
router.register(r'medicos', MedicoViewSet)
router.register(r'especialidades', EspecialidadViewSet)

urlpatterns = router.urls


'''
GET /api/usuarios/clientes/
POST /api/usuarios/clientes/

GET /api/usuarios/medicos/3/
PUT /api/usuarios/medicos/3/
DELETE /api/usuarios/medicos/3/
'''