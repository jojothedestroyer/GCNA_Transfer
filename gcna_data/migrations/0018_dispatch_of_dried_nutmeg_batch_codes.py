# Generated by Django 4.2.1 on 2024-05-10 17:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('gcna_data', '0017_remove_vehicle_inspection_provider_cont_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='dispatch_of_dried_nutmeg',
            name='BATCH_CODES',
            field=models.CharField(max_length=150, null=True, verbose_name='Batch Number'),
        ),
    ]
