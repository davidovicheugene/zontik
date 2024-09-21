from django.urls import path
from .views import *


urlpatterns = [
    path('sys_balance/<int:pk>', GetSysBalance.as_view(), name="sys_balance"),
]

