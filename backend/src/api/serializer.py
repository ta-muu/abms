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
		fields = ('id','tank_name', 'created_at', 'updated_at')

class IndividualSerializer(serializers.ModelSerializer):
	class Meta:
		model = Individual
		fields = ('id','individual_name', 'created_at', 'updated_at', 'tank_id')

class SensorSerializer(serializers.ModelSerializer):
	class Meta:
		model = Sensor
		fields = ('id', 'sensor_name', 'created_at', 'updated_at', 'tank_id', 'water_temperature_upper_limit', 'water_temperature_lower_limit', 'turbidity_upper_limit', 'turbidity_lower_limit')

class WaterTemperatureSerializer(serializers.ModelSerializer):
	class Meta:
		model = WaterTemperature
		fields = ('id', 'created_at', 'updated_at', 'sensor_id', "water_temperature")

class TurbiditySerializer(serializers.ModelSerializer):
	class Meta:
		model = Turbidity
		fields = ('id', 'created_at', 'updated_at', 'sensor_id', "turbidity")