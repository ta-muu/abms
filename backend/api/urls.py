from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import UserViewSet, TankViewSet

# Create a router and register our ViewSets with it.
router = DefaultRouter()
router.register('users', UserViewSet, basename='users')
router.register('tanks', TankViewSet, basename='tanks')

# The API URLs are now determined automatically by the router.
urlpatterns = [
    path('', include(router.urls)),
]