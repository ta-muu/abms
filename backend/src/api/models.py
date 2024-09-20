from django.db import models

# Create your models here.
class User(models.Model):
	user_name = models.CharField(max_length=50)
	created_at = models.DateTimeField(auto_now_add=True)
	updated_at = models.DateTimeField(auto_now=True)
	deleted_at = models.DateTimeField(blank=True, null=True)
	mail_address = models.EmailField()

class Tank(models.Model):
	tank_name = models.CharField(max_length=50)
	created_at = models.DateTimeField(auto_now_add=True)
	updated_at = models.DateTimeField(auto_now=True)
	deleted_at = models.DateTimeField(blank=True, null=True)

class Individual(models.Model):
	individual_name = models.CharField(max_length=50)
	created_at = models.DateTimeField(auto_now_add=True)
	updated_at = models.DateTimeField(auto_now=True)
	deleted_at = models.DateTimeField(blank=True, null=True)
	tank_id = models.IntegerField()

class Sensor(models.Model):
	sensor_name = models.CharField(max_length=50)
	created_at = models.DateTimeField(auto_now_add=True)
	updated_at = models.DateTimeField(auto_now=True)
	deleted_at = models.DateTimeField(blank=True, null=True)
	tank_id = models.IntegerField()
	water_temperature_upper_limit = models.FloatField()
	water_temperature_lower_limit = models.FloatField()
	turbidity_upper_limit = models.FloatField()
	turbidity_lower_limit = models.FloatField()


class WaterTemperature(models.Model):
	created_at = models.DateTimeField(auto_now_add=True)
	updated_at = models.DateTimeField(auto_now=True)
	sensor_id = models.IntegerField()
	water_temperature = models.FloatField()

class Turbidity(models.Model):
	created_at = models.DateTimeField(auto_now_add=True)
	updated_at = models.DateTimeField(auto_now=True)
	sensor_id = models.IntegerField()
	turbidity = models.FloatField()
