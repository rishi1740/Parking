import logging
from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.views import APIView
from django.shortcuts import render
from .models import Vehicle, ParkingSession
from .serializers import VehicleSerializer, ParkingSessionSerializer

logger = logging.getLogger(__name__)

class VehicleListCreateView(generics.ListCreateAPIView):
    queryset = Vehicle.objects.all()
    serializer_class = VehicleSerializer

class VehicleCreateView(generics.CreateAPIView):
    queryset = Vehicle.objects.all()
    serializer_class = VehicleSerializer

class ParkingSessionListCreateView(generics.ListCreateAPIView):
    queryset = ParkingSession.objects.all()
    serializer_class = ParkingSessionSerializer

class CheckInView(APIView):
    def post(self, request, format=None):
        vehicle_id = request.data.get('vehicle_id')
        vehicle = Vehicle.objects.get(id=vehicle_id)
        session = ParkingSession(vehicle=vehicle)
        session.save()
        return Response({'status': 'checked in'}, status=status.HTTP_201_CREATED)

class CheckOutView(APIView):
    def post(self, request, format=None):
        session_id = request.data.get('session_id')
        session = ParkingSession.objects.get(id=session_id)
        session.check_out()
        return Response({'status': 'checked out', 'total_amount_due': session.total_amount_due}, status=status.HTTP_200_OK)

def index(request):
    return render(request, 'index.html')
