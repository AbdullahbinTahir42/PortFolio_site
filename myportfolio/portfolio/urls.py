
from django.urls import path
from . import views

urlpatterns = [
    path('',views.Home,name='home'),
    path('About/',views.About,name='about'),
    path('projects/',views.Projects,name='projects'),
    path('contact/',views.Contact,name='contact'),
]
