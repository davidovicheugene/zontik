from rest_framework import serializers
from .models import video


class VideoSerializer(serializers.ModelSerializer):
    class Meta:
        model = video
        fields = ['title', 'channel']
