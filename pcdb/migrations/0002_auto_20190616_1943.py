# Generated by Django 2.2.2 on 2019-06-16 19:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pcdb', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='comment',
            name='created_at',
            field=models.DateTimeField(auto_now_add=True),
        ),
        migrations.AlterField(
            model_name='post',
            name='created_at',
            field=models.DateTimeField(auto_now_add=True),
        ),
    ]
