from django.db import models
from django.contrib.auth.models import AbstractUser


def user_directory_path(instance, filename):
    return 'user_{0}/{1}'.format(instance.user.id, filename)


class User(AbstractUser):
    BALANCE_CURRENCY_CHOICES = (
        ("RUB", "Российский рубль"),
        ("BYN", "Белорусский рубль"),
        ("USD", "Доллар США"),
        ("EUR", "Евро"),
    )
    middle_name = models.CharField(max_length=25, default="", verbose_name="Отчество")
    balance = models.DecimalField(default=0, max_digits=15, decimal_places=2, verbose_name="Баланс")
    balance_currency = models.CharField(max_length=3, choices=BALANCE_CURRENCY_CHOICES, default="RUB", verbose_name="Валюта баланса")
    profile_image = models.ImageField(upload_to=user_directory_path, null=True, width_field=200, height_field=200, verbose_name="Фото профиля")

