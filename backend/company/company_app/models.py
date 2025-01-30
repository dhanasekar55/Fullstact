from django.db import models

class company(models.Model):
    name = models.CharField(max_length=100)
    age = models.IntegerField()
    contact = models.IntegerField()
    email = models.EmailField()
