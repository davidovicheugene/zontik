from django.contrib import admin
from .models import User


class UserAdmin(admin.ModelAdmin):
    fields = ('last_name',
              'first_name',
              'middle_name',
              'email',
              'balance',
              'balance_currency',
              'is_active',
              'is_staff')
    list_display = ('username', 'last_name', 'first_name', 'middle_name', 'email', 'balance')


admin.site.register(User, UserAdmin)
