from django.urls import path
from .views import CompanyListCreateAPIView, CompanyRetrieveUpdateDestroyAPIView

urlpatterns = [
    path('api/company/', CompanyListCreateAPIView.as_view(), name='company-list-create'),
    path('api/company/<int:pk>/', CompanyRetrieveUpdateDestroyAPIView.as_view(), name='company-detail'),
]
