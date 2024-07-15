from django.db import models
from django.contrib.auth.models import User

class Vehicle(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='vehicles')
    number = models.CharField(max_length=15, unique=True)
    make = models.CharField(max_length=50)
    model = models.CharField(max_length=50)

    def __str__(self):
        return self.number

class ParkingSession(models.Model):
    vehicle = models.ForeignKey(Vehicle, on_delete=models.CASCADE, related_name='parking_sessions')
    check_in_time = models.DateTimeField(auto_now_add=True)
    check_out_time = models.DateTimeField(null=True, blank=True)
    total_amount_due = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)

    def check_out(self):
        self.check_out_time = timezone.now()
        # Assume a fixed rate for simplicity
        self.total_amount_due = (self.check_out_time - self.check_in_time).seconds / 3600 * 10
        self.save()

    def __str__(self):
        return f'{self.vehicle.number} - {self.check_in_time}'
