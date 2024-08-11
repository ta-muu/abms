from rest_framework import serializers
from .models import User, Tank, Individual


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