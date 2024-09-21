from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import FinAccount


class GetSysBalance(APIView):
    def get(self, request, **kwargs):
        sys_acc = FinAccount.objects.get(user_id=kwargs['pk'])
        output = [
            {
                "currency": sys_acc.currency,
                "balance": sys_acc.balance,
            }
        ]
        return Response(output)
