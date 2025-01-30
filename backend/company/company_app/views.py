from django.shortcuts import render
from .models import company
from .forms import companyform



from django.shortcuts import get_object_or_404
from rest_framework import generics
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from .models import company
from .serializers import companyserializer

# API to list all company records or create a new one
class CompanyListCreateAPIView(generics.ListCreateAPIView):
    queryset = company.objects.all()
    serializer_class = companyserializer

# API to retrieve, update, or delete a specific company record
class CompanyRetrieveUpdateDestroyAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = company.objects.all()
    serializer_class = companyserializer

