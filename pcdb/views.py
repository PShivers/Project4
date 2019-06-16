from rest_framework import generics
from .serializers import UserSerializer, PostSerializer, CommentSerializer
from .models import User, Post, Comment
import requests
from django.shortcuts import render
from django.http import JsonResponse, HttpResponse
from django.views import View
from . import services


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
        print('listen request')
        url="https://listen-api.listennotes.com/api/v2/best_podcasts?genre_id=93&page=2&region=us&safe_mode=1"
        headers = {"X-ListenAPI-Key": ""}
        r = requests.get(url, headers=headers)
        data = r.json()
        print(data)
        return JsonResponse(data)



class KanyeAPI(View):
    def get(self, request):
        print('yo')
        r = requests.get('https://api.kanye.rest')
        data = r.json()
        print(data)
        return JsonResponse(data)


class BooksPage(View):
    def get(self, request):
        print(request)
        books_list = services.get_books('2009', 'edwards')
        return render(request, 'books.html', books_list)
    # def get(self, request,*args,**kwargs):
    #     print(request.GET['test'])
    #     response = requests.get('https://api.github.com/events')
    #     return JsonResponse(response.json(), safe=False)
    #     return response.text
