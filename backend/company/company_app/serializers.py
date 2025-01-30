from rest_framework import serializers
from .models import company


class companyserializer(serializers.ModelSerializer):
    class Meta:
        model = company  # Specify the model
        fields = '__all__' 