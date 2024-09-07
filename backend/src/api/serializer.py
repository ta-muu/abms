from rest_framework import serializers
from .models import User, Tank, Individual, Sensor, WaterTemperature, Turbidity


class UserSerializer(serializers.ModelSerializer):
	class Meta:
		model = User
		fields = ('id','user_name', 'created_at', 'updated_at', 'mail_address')
		# read_only_fields = ('id',)ef 

class TankSerializer(serializers.ModelSerializer):
	class Meta:
		model = Tank
		fields = ('id', 'created_at', 'updated_at', 'turbidity_threshold')

class IndividualSerializer(serializers.ModelSerializer):
	class Meta:
		model = Individual
		fields = ('id', 'created_at', 'updated_at', 'tank_id')

class SensorSerializer(serializers.ModelSerializer):
	class Meta:
		model = Sensor
		fields = ('id', 'created_at', 'updated_at', 'tank_id')

class WaterTemperatureSerializer(serializers.ModelSerializer):
	class Meta:
		model = WaterTemperature
		fields = ('id', 'created_at', 'updated_at', 'tank_id', "water_temperature")

class TurbiditySerializer(serializers.ModelSerializer):
	class Meta:
		model = Turbidity
		fields = ('id', 'created_at', 'updated_at', 'tank_id', "turbidity")