from django.contrib import admin
from .models import FinAccount


class FinAccountAdmin(admin.ModelAdmin):
    list_display = ('name', 'currency', 'balance', 'user')


admin.site.register(FinAccount, FinAccountAdmin)
