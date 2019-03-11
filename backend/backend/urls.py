from django.contrib import admin
from django.urls import path
from rest_framework_jwt.views import obtain_jwt_token

urlpatterns = [
    path('admin/', admin.site.urls),
    # default view for decoding received JWTs. 
    path('token-auth/', obtain_jwt_token),
    path('core/', include('core.urls'))
]
