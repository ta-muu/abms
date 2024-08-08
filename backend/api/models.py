from django.db import models

# Create your models here.
class User(models.Model):
	user_name = models.CharField(max_length=50)
	created_at = models.DateTimeField(auto_now_add=True)
	updated_at = models.DateTimeField(auto_now=True)
	deleted_at = models.DateTimeField(blank=True, null=True)
	mail_adress = models.EmailField()