from django.db import models

# Create your models here.

class Event(models.Model):
    title = models.CharField(max_length=200)
    description = models.CharField(max_length=200)
    date = models.DateField()
    location = models.CharField(max_length=200)

    def __str__(self):
        return self.title