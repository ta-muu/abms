from rest_framework import viewsets
from .models import User, Tank, Individual, WaterTemperature, Turbidity
from .serializer import UserSerializer, TankSerializer, IndividualSerializer, WaterTemperatureSerializer, TurbiditySerializer

class UserViewSet(viewsets.ModelViewSet):
	queryset = User.objects.all()  
	serializer_class = UserSerializer

class TankViewSet(viewsets.ModelViewSet):
	queryset = Tank.objects.all()  
	serializer_class = TankSerializer
	
class IndividualViewSet(viewsets.ModelViewSet):
	queryset = Individual.objects.all()  
	serializer_class = IndividualSerializer
	
class WaterTemperatureViewSet(viewsets.ModelViewSet):
	queryset = WaterTemperature.objects.all()  
	serializer_class = WaterTemperatureSerializer
	
class TurbidityViewSet(viewsets.ModelViewSet):
	queryset = Turbidity.objects.all()  
	serializer_class = TurbiditySerializer


# Create your views here.
