from rest_framework.routers import DefaultRouter
from atencion_citas.views.historial_viewset import HistorialClinicoViewSet
from atencion_citas.views.medicamento_viewset import MedicamentoViewSet
from atencion_citas.views.prescripcion_viewset import PrescripcionViewSet

router = DefaultRouter()

router.register(r'historiales', HistorialClinicoViewSet)
router.register(r'medicamentos', MedicamentoViewSet)
router.register(r'prescripciones', PrescripcionViewSet)

urlpatterns = router.urls

'''

GET /api/atencion/historiales/
GET /api/atencion/prescripciones/


'''