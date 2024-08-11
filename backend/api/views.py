from rest_framework import viewsets
from .models import User, Tank
from .serializer import UserSerializer, TankSerializer

class UserViewSet(viewsets.ModelViewSet):
	queryset = User.objects.all()  
	serializer_class = UserSerializer

class TankViewSet(viewsets.ModelViewSet):
	queryset = Tank.objects.all()  
	serializer_class = TankSerializer


# Create your views here.
