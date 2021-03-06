from rest_framework import generics
from .serializers import UserSerializer, PostSerializer, CommentSerializer
from .models import User, Post, Comment
import requests
from django.shortcuts import render
from django.http import JsonResponse, HttpResponse
from django.views import View
from . import services
from decouple import config

API_KEY = config('API_KEY')

class UserList(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class UserDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class PostList(generics.ListCreateAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer


class PostDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer


class CommentList(generics.ListCreateAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer


class CommentDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer


class Popular(View):
    def get(self, request):
        url="https://listen-api.listennotes.com/api/v2/best_podcasts?region=us&safe_mode=1"
        headers = {"X-ListenAPI-Key": API_KEY}
        r = requests.get(url, headers=headers)
        data = r.json()
        return JsonResponse(data)

class SinglePodcast(View):
    def get(self,request, id):
        print(request)
        url = f"https://listen-api.listennotes.com/api/v2/podcasts/{id}?sort=recent_first"
        headers = {"X-ListenAPI-Key": API_KEY}
        response = requests.get(url, headers=headers)
        data = r.json()
        return JsonResponse(data)

class KanyeAPI(View):
    def get(self, request):
        r = requests.get('https://api.kanye.rest')
        data = r.json()
        return JsonResponse(data)

