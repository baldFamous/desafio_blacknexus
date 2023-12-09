from rest_framework import serializers
from .models import Event

class eventSerializer(serializers.ModelSerializer):
    """
    Esta clase es un serializador para el modelo Event.

    Hereda de la clase ModelSerializer proporcionada por Django Rest Framework.
    Esta clase proporciona una forma de especificar los campos que deben serializarse.
    Genera automáticamente validadores para los campos del serializador.
    """
    class Meta:
        """
        Esta clase proporciona metadatos adicionales para el serializador.
        En este caso, especificamos el modelo Event que se utilizará para crear el serializador.
        También especificamos todos los campos que deben serializarse.
        """
        model = Event
        fields = '__all__'