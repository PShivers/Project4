from django.urls import path
# from rest_framework import routers
from rest_framework.routers import DefaultRouter
from . import views

# router = routers.DefaultRouter()
# router.register('users', views.UsersView)
# router.register('posts', views.PostsView)
# router.register('comments', views.CommentsView)

urlpatterns = [
    path('users/', views.UserList.as_view(), name='user_list'),
    path('users/<int:pk>', views.UserDetail.as_view(), name='user_detail'),

    path('posts/', views.PostList.as_view(), name='post_list'),
    path('posts/<int:pk>', views.PostDetail.as_view(), name='post_detail'),
   
    path('comments/', views.CommentList.as_view(), name='comment_list'),
    path('comments/<int:pk>', views.CommentDetail.as_view(), name='comment_detail'),
    path('posts/comments/<int:pk>', views.CommentDetail.as_view(), name='comment_detail'),
    
    path('podcasts/popular/', views.Popular.as_view(), name='popular'),
    path('podcasts/<str:id>', views.SinglePodcast.as_view(), name='single_podcast'),

    path('kanye/', views.KanyeAPI.as_view(), name='KanyeAPI'),
    # path('', include(router.urls))
]

