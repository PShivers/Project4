# Generated by Django 2.2.2 on 2019-07-28 03:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pcdb', '0007_auto_20190616_2007'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='password',
            field=models.CharField(default='', max_length=100),
        ),
    ]
