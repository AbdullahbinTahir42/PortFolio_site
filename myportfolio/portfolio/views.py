from django.shortcuts import render,redirect
from .models import Contact
from django.http import FileResponse
import os
from django.core.mail import send_mail
from django.conf import settings
from django.contrib import messages


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
        print(email)

        Contact.objects.create(name=name, email=email, message=message)

        # Email to admin
        send_mail(
            f"New message from {name}",
            message,
            email,  # from_email (visitor's email)
            [settings.ADMIN_EMAIL],
            fail_silently=False,
        )

        # Confirmation email to user
        send_mail(
            f"Thank you {name}, for contacting me!",
            "I've received your message and will get back to you soon.",
            settings.EMAIL_HOST_USER,  # from_email (your admin email)
            [email],               # recipient_list (visitor's email)
            fail_silently=False,
        )
        messages.success(request, "Thank you for contacting us! We'll get back to you soon.")

        return redirect("home")

    return render(request, "portfolio/contact.html")