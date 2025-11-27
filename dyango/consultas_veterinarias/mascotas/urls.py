from rest_framework.routers import DefaultRouter
from mascotas.views.mascota_viewset import MascotaViewSet

router = DefaultRouter()
router.register(r'mascotas', MascotaViewSet)

urlpatterns = router.urls


'''
GET /api/mascotas/mascotas/
POST /api/mascotas/mascotas/

'''
