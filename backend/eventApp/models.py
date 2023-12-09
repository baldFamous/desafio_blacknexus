from django.db import models

# Create your models here.

class Event(models.Model):
    """
    Esta clase define el modelo Event.

    Hereda de la clase Model proporcionada por Django.

    Atributos:
        title (CharField): título del evento.
        description (CharField): descripción del evento.
        date (DateField): fecha del evento.
        location (CharField): ubicación del evento.
    """
    title = models.CharField(max_length=200)
    description = models.CharField(max_length=200)
    date = models.DateField()
    location = models.CharField(max_length=200)

    def __str__(self):
        """
        Método que devuelve una representación de cadena del objeto.
        :return: título del evento.
        """
        return self.title