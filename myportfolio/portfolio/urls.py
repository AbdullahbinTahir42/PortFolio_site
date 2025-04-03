
from django.urls import path
from . import views

urlpatterns = [
    path('',views.Home,name='home'),
    path('Resume/',views.Resume,name='resume'),
    path('projects/',views.Projects,name='projects'),
    path('contact/',views.contact,name='contact'),
    path('download_cv/',views.download_cv,name='download_cv'),
]
