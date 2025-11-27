from rest_framework.routers import DefaultRouter
from gestion_citas.views.cita_viewset import CitaViewSet
from gestion_citas.views.sala_viewset import SalaViewSet

router = DefaultRouter()
router.register(r'citas', CitaViewSet)
router.register(r'salas', SalaViewSet)

urlpatterns = router.urls


'''
GET /api/citas/citas/
POST /api/citas/citas/
GET /api/citas/salas/

'''