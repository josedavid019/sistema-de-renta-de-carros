from django.db import models

class Role(models.Model):

    name = models.CharField(max_length=100)

class User(models.Model):
    # username = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=20)
    # is_admin = models.BooleanField(default=False)

    def __str__(self):
        return self.name

class User(models.Model):
    id = models.AutoField(primary_key=True)
    username = models.CharField(max_length=16)
    password = models.CharField(max_length=255)
    role = models.ForeignKey(Role, on_delete=models.PROTECT, null=True)

    def __str__(self):
        return self.username