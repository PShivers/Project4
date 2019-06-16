from django.db import models

# Create your models here.
class User(models.Model):
    name = models.CharField(max_length=100)
    photo_url = models.TextField()

    def __str__(self):
        return self.name

class Post(models.Model):
    title = models.CharField(max_length=100)
    body = models.CharField(max_length=100)
    created_at = models.CharField(max_length=100)
    # created_at = models.DateTimeField(auto_now_add=True) auto input time, but need to figure out how to get to work with react
    author = models.ForeignKey(User, on_delete=models.CASCADE, default='', related_name='posts')
    
    def __str__(self):
        return self.title

class Comment(models.Model):
    content = models.CharField(max_length=100)
    created_at = models.CharField(max_length=100)
    # created_at = models.DateTimeField(auto_now_add=True)
    author = models.ForeignKey(User, on_delete=models.CASCADE,  default='', related_name='comments')
    post = models.ForeignKey(Post, on_delete=models.CASCADE,  default='', related_name='comments')

    def __str__(self):
        return self.content