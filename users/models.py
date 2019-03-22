from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
from django.db import models


# Helper functions for creating a user or superuser
class UserManager(BaseUserManager):

    def create_user(self, email, password=None, **extra_fileds):
        """ Create and save new user """
        user = self.model(email=email, **extra_fileds)
        user.set_password(password)
        user.save(using=self._db)

        return user


class User(AbstractBaseUser, PermissionsMixin):
    """ Custom UserModel that supports using email as user name """
    email = models.EmailField(max_length=255, unique=True)
    name = models.CharField(max_length=255)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=True)

    """ Assign UserManager to the objects attribute """
    objects = UserManager()

    USERNAME_FIELD = 'email'

    # def __str__(self):
    #   return self.email
