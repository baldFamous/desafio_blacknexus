from django.urls import path, include
from rest_framework import routers
from rest_framework.documentation import include_docs_urls
from .views import eventView

# esta clase se utiliza para crear automáticamente la configuración de URL para su API
router = routers.DefaultRouter()
# registramos la vista en el router
router.register(r'event', eventView, 'event')

# especificamos la URL base y el enrutador se encargará del resto
urlpatterns = [
    path('api/v1/', include(router.urls)),
    path('docs/', include_docs_urls(title='Event API')) # url de documentación de la api
]
