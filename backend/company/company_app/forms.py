from django import forms
from .models import company


class companyform(forms.ModelForm):
    class meta:
        model = company
        fields = "__all__"
