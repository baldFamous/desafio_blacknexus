from rest_framework import viewsets
from .models import Event
from .serializer import eventSerializer

# Create your views here.
class eventView(viewsets.ModelViewSet):
    """
    Esta clase representa una vista para el modelo de eventos.

     Hereda de la clase ModelViewSet proporcionada por Django Rest Framework.
     Esta clase proporciona el conjunto completo de operaciones de lectura y escritura predeterminadas.

     Atributos:
     queryset: un QuerySet que representa una colección de consultas de base de datos para el modelo de evento.
     serializer_class: la clase de serializador que debe usarse para validar y deserializar la entrada y para serializar la salida.
    """

    queryset = Event.objects.all()
    serializer_class = eventSerializer