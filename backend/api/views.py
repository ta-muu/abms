from rest_framework import viewsets
from .models import User, Tank, Individual
from .serializer import UserSerializer, TankSerializer, IndividualSerializer

class UserViewSet(viewsets.ModelViewSet):
	queryset = User.objects.all()  
	serializer_class = UserSerializer

class TankViewSet(viewsets.ModelViewSet):
	queryset = Tank.objects.all()  
	serializer_class = TankSerializer
	
class IndividualViewSet(viewsets.ModelViewSet):
	queryset = Individual.objects.all()  
	serializer_class = IndividualSerializer


# Create your views here.
