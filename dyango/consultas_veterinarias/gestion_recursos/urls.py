from rest_framework.routers import DefaultRouter
from gestion_recursos.views.factura_viewset import FacturaViewSet

router = DefaultRouter()
router.register(r'facturas', FacturaViewSet)

urlpatterns = router.urls

'''
GET /api/recursos/facturas/

'''