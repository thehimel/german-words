from django.urls import path

from applications.base.views import HomeView, MessageView

app_name = "base"

urlpatterns = [
    path("", HomeView.as_view(), name="home"),
    path("messages/", MessageView.as_view(), name="messages"),
]
