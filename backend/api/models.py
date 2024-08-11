from django.db import models

# Create your models here.
class User(models.Model):
	user_name = models.CharField(max_length=50)
	created_at = models.DateTimeField(auto_now_add=True)
	updated_at = models.DateTimeField(auto_now=True)
	deleted_at = models.DateTimeField(blank=True, null=True)
	mail_address = models.EmailField()

class Tank(models.Model):
	created_at = models.DateTimeField(auto_now_add=True)
	updated_at = models.DateTimeField(auto_now=True)
	deleted_at = models.DateTimeField(blank=True, null=True)
	turbidity_threshold = models.FloatField()

class Individual(models.Model):
	created_at = models.DateTimeField(auto_now_add=True)
	updated_at = models.DateTimeField(auto_now=True)
	deleted_at = models.DateTimeField(blank=True, null=True)
	tank_id = models.IntegerField()

class Sensor(models.Model):
	created_at = models.DateTimeField(auto_now_add=True)
	updated_at = models.DateTimeField(auto_now=True)
	deleted_at = models.DateTimeField(blank=True, null=True)
	tank_id = models.IntegerField()


class WaterTemperature(models.Model):
	created_at = models.DateTimeField(auto_now_add=True)
	updated_at = models.DateTimeField(auto_now=True)
	tank_id = models.IntegerField()
	water_temperature = models.FloatField()

class Turbidity(models.Model):
	created_at = models.DateTimeField(auto_now_add=True)
	updated_at = models.DateTimeField(auto_now=True)
	tank_id = models.IntegerField()
	turbidity = models.FloatField()
