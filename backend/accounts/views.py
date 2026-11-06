from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import AllowAny,IsAuthenticated
from .serializers import UserSerializer


# Create your views here.

class RegisterView(APIView):
    permission_classes=[AllowAny]

    def post(self,request):
        serializer=UserSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()

            return Response(
                serializer.data,
                status=status.HTTP_201_CREATED
            )
        return Response(
            serializer.errors,
            status=status.HTTP_400_BAD_REQUEST
        )

class CustomerProfileView(APIView):
    permission_classes=[IsAuthenticated]

    def get(self,request):
        user=request.user
        data = {
            'id': user.id,
            'username': user.username,
            'email': user.email,
            'phone_number':user.phone_number,
        }
        return Response(data,status=status.HTTP_200_OK)