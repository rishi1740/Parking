from django.urls import path
from .views import VehicleCreateView, VehicleListCreateView, ParkingSessionListCreateView, CheckInView, CheckOutView

urlpatterns = [
    path('vehicles/', VehicleListCreateView.as_view(), name='vehicle-list-create'),
    path('vehicles/add/', VehicleCreateView.as_view(), name='vehicle-add'),
    path('parking_sessions/', ParkingSessionListCreateView.as_view(), name='parking-session-list-create'),
    path('check_in/', CheckInView.as_view(), name='check-in'),
    path('check_out/', CheckOutView.as_view(), name='check-out'),
]
