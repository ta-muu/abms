from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import UserViewSet, TankViewSet, IndividualViewSet, SensorViewSet, WaterTemperatureViewSet, TurbidityViewSet

# Create a router and register our ViewSets with it.
router = DefaultRouter()
router.register('users', UserViewSet, basename='users')
router.register('tanks', TankViewSet, basename='tanks')
router.register('individuals', IndividualViewSet, basename='individuals')
router.register('sensors', SensorViewSet, basename='sensors')
router.register('water_temperatures', WaterTemperatureViewSet, basename='water_temperatures')
router.register('turbidities', TurbidityViewSet, basename='turbidities')

# The API URLs are now determined automatically by the router.
urlpatterns = [
    path('', include(router.urls)),
]