# Generated by Django 2.2.2 on 2019-06-10 13:55

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('photo_url', models.TextField()),
            ],
        ),
        migrations.CreateModel(
            name='Post',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=100)),
                ('body', models.CharField(max_length=100)),
                ('created_at', models.CharField(max_length=100)),
                ('author', models.ForeignKey(default='', on_delete=django.db.models.deletion.CASCADE, related_name='posts', to='pcdb.User')),
            ],
        ),
        migrations.CreateModel(
            name='Comment',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('content', models.CharField(max_length=100)),
                ('created_at', models.CharField(max_length=100)),
                ('author', models.ForeignKey(default='', on_delete=django.db.models.deletion.CASCADE, related_name='comments', to='pcdb.User')),
                ('post', models.ForeignKey(default='', on_delete=django.db.models.deletion.CASCADE, related_name='comments', to='pcdb.Post')),
            ],
        ),
    ]