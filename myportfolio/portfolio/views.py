from django.shortcuts import render

# Create your views here.

def Home(request):
    return render(request,'portfolio/home.html')

def About(request):
    return render(request,'portfolio/about.html')

def Projects(request):
    return render(request,'portfolio/project.html')

def Contact(request):
    return render(request,'portfolio/contact.html')