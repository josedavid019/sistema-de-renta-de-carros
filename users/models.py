from django.db import models
from django.contrib.auth.hashers import make_password, check_password

class User(models.Model):
    # username = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=10)
    # is_admin = models.BooleanField(default=False)

    def __str__(self):
        return self.email


    def save(self, *args, **kwargs):
        if not self.pk:
            self.password = make_password(self.password)
        super().save(*args, **kwargs)

    def check_password(self, raw_password):
        return check_password(raw_password, self.password)
