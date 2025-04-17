# Generated by Django 5.1.7 on 2025-04-17 18:44

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Reserva',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('lugar_recogida', models.CharField(max_length=100)),
                ('fecha_recogida', models.DateField()),
                ('hora_recogida', models.TimeField()),
                ('lugar_devolucion', models.CharField(max_length=100)),
                ('fecha_devolucion', models.DateField()),
                ('hora_devolucion', models.TimeField()),
            ],
        ),
    ]
