from django.shortcuts import render,redirect
from .models import Contact
from django.http import FileResponse
import os


def download_cv(request):
    file_path = os.path.join("static/files", "MyCV.pdf")
    return FileResponse(open(file_path, "rb"), as_attachment=True)

def Home(request):
    return render(request,'portfolio/home.html')

def Resume(request):
    return render(request,'portfolio/resume.html')

def Projects(request):
    return render(request,'portfolio/project.html')



def contact(request):
    if request.method == "POST":
        name = request.POST.get("name")
        email = request.POST.get("email")
        message = request.POST.get("message")

        Contact.objects.create(name=name, email=email, message=message)
        return redirect("home") 

    return render(request, "portfolio/contact.html")