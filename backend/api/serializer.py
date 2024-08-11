from rest_framework import serializers
from .models import User


class UserSerializer(serializers.ModelSerializer):
	class Meta:
		model = User
		fields = ('id','user_name', 'created_at', 'updated_at', 'mail_address')
		# read_only_fields = ('id',)ef 