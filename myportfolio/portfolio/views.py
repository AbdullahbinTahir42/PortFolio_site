from django.shortcuts import render,redirect
from .models import Contact
from django.http import FileResponse,Http404
import os
from django.core.mail import send_mail
from django.conf import settings
from django.contrib import messages



def download_cv(request):
    file_path = os.path.join(settings.BASE_DIR, "static", "files", "CV.pdf")
    try:
        return FileResponse(open(file_path, "rb"), as_attachment=True)
    except FileNotFoundError:
        raise Http404("CV file not found.")

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

        # Confirmation email to user
        send_mail(
            f"Thank you {name}, for contacting me!",
            "I've received your message and will get back to you soon.",
            settings.ADMIN_EMAIL,  # from_email (your admin email)
            [email],               # recipient_list (visitor's email)
            fail_silently=False,
        )
        messages.success(request, "Thank you for contacting us! We'll get back to you soon.")

        return redirect("home")

    return render(request, "portfolio/contact.html")