from django.db import models
from django.db.models.signals import post_save
from django.dispatch import receiver
from django.conf import settings


class FinAccount(models.Model):
    CURRENCY_CHOICES = (
        ("RUB", "Российский рубль"),
        ("BYN", "Белорусский рубль"),
        ("USD", "Доллар США"),
        ("EUR", "Евро"),
    )
    FIN_ACC_COLORS = (
        ("RED", "Красный"),
        ("PRP", "Фиолетовый"),
        ("GRN", "Зелёный"),
        ("ORN", "Оранжевый"),
    )
    name = models.CharField(max_length=20, default='ВНУТРЕННИЙ БАЛАНС', verbose_name='Название')
    balance = models.DecimalField(default=0, max_digits=15, decimal_places=2, verbose_name="Остаток")
    color = models.CharField(choices=FIN_ACC_COLORS, max_length=3, default="PRP", verbose_name="Цвет")
    holder = models.CharField(max_length=27, default="SYSTEM ACCOUNT", verbose_name="Держатель счёта")
    card_number = models.CharField(max_length=16, default="0000000000000000", verbose_name="Номер карты")
    account_number = models.CharField(max_length=34, blank=True, verbose_name="Номер счёта")
    date_expires = models.DateField(null=True, verbose_name="Срок действия")
    currency = models.CharField(max_length=3, choices=CURRENCY_CHOICES, default="RUB", verbose_name="Валюта счёта")
    date_created = models.DateTimeField(auto_now_add=True, verbose_name="Дата добавления")
    date_signed = models.DateField(null=True, verbose_name="Дата открытия")
    user = models.ForeignKey(to='users.User', on_delete=models.CASCADE, verbose_name="Владелец")


@receiver(post_save, sender=settings.AUTH_USER_MODEL)
def create_fin_account(sender, instance, created, **kwargs):
    if created:
        FinAccount.objects.create(currency=instance.balance_currency, user=instance)
