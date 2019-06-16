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


# class ListenAPI(View):
#     def get(self, request):
#         print('listen request')
#         r = requests.get(url="https://listen-api.listennotes.com/api/v2/search?q=star%20wars&sort_by_date=0&type=episode&offset=0&len_min=10&len_max=30&genre_ids=68%2C82&published_before=1390190241000&published_after=0&only_in=title%2Cdescription&language=English&safe_mode=1")
#         data = r.json()
#         print('data')


url = 'https://api.github.com/some/endpoint'
headers = {'user-agent': 'my-app/0.0.1'}


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
