# Generated by Django 2.2.2 on 2019-06-16 20:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pcdb', '0006_auto_20190616_2000'),
    ]

    operations = [
        migrations.AlterField(
            model_name='comment',
            name='created_at',
            field=models.CharField(max_length=100),
        ),
        migrations.AlterField(
            model_name='post',
            name='created_at',
            field=models.CharField(max_length=100),
        ),
    ]
