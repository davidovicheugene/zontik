import decimal
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import FinAccount


def prepare_card_number(number):
    pos = 1
    result = ""
    for ch in number:
        if pos % 4 == 0:
            result += ch + " "
        else:
            result += ch
        pos += 1
    result = result[0:-1]
    return result


def prepare_date(date):
    dates = date.strftime("%m %Y")
    return dates[0:2] + "/" + dates[5:7]


class GetSysBalance(APIView):
    def get(self, request, **kwargs):
        sys_acc = FinAccount.objects.get(user_id=kwargs['pk'], card_number="0000000000000000")
        output = [
            {
                "currency": sys_acc.currency,
                "balance": sys_acc.balance,
            }
        ]
        return Response(output)


class GetBaseAccsData(APIView):

    def get(self, request, **kwargs):
        accounts = FinAccount.objects.filter(user_id=kwargs['pk'])
        output = [
            {
                "name": output.name,
                "balance": output.balance,
                "color": output.color,
                "holder": output.holder,
                "card_number": prepare_card_number(output.card_number),
                "date_expires": prepare_date(output.date_expires),
                "currency": output.currency,
                "id": output.pk,
            } for output in accounts
        ]
        return Response(output)


class ChangeAccBalance(APIView):
    def post(self, request, **kwargs):
        acc = FinAccount.objects.get(pk=kwargs['pk'])
        change = request.data["balance"]
        sign = request.data["sign"]
        if sign == "+":
            acc.balance = acc.balance + decimal.Decimal(change)
        elif sign == "-":
            if acc.balance >= decimal.Decimal(change):
                acc.balance = acc.balance - decimal.Decimal(change)
            else:
                pass
        else:
            pass

        acc.save()
        return Response(request.data)

