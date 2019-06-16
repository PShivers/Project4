from rest_framework import serializers
from .models import User, Post, Comment

class CommentSerializer(serializers.ModelSerializer):

    author = serializers.PrimaryKeyRelatedField(
        queryset = User.objects.all()
    )

    post = serializers.PrimaryKeyRelatedField(
        queryset = Post.objects.all()
    )

    class Meta:
        model = Comment
        fields = ('id', 'content', 'created_at', 'author', 'post')

class PostSerializer(serializers.ModelSerializer):
    
    author = serializers.PrimaryKeyRelatedField(
        queryset = User.objects.all()
    )
    
    comments = CommentSerializer(
        # view_name='comment_detail',
        many=True,
        read_only=True
    )

    class Meta:
        model = Post
        fields = ('id', 'title', 'body', 'created_at', 'author', 'comments')


class UserSerializer(serializers.ModelSerializer):

    posts = PostSerializer(
        # view_name='post_detail',
        many=True,
        read_only=True
    )

    comments = CommentSerializer(
        # view_name='comment_detail',
        many=True,
        read_only=True
    )

    class Meta:
        model = User
        fields = ('id', 'name', 'photo_url', 'posts', 'comments')


