from django.urls import path
from .views import *


urlpatterns = [
    path('sys_balance/<int:pk>', GetSysBalance.as_view(), name="sys_balance"),
    path('accs_base_data/<int:pk>', GetBaseAccsData.as_view(), name="accs_base_data"),
    path('change_acc_bal/<int:pk>', ChangeAccBalance.as_view(), name="change_acc_bal"),

]

