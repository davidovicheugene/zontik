from rest_framework import serializers
from .models import *


class FinAccountSerializer(serializers.ModelSerializer):
    class Meta:
        model = FinAccount
        fields = ['name',
                  'balance',
                  'color',
                  'holder',
                  'card_number',
                  'account_number',
                  'date_expires',
                  'currency',
                  'is_active',
                  'user'
                  ]
