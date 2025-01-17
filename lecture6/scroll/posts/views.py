import time

from django.http import JsonResponse
from django.shortcuts import render

# Create your views here.
def index(req):
  return render(req, 'posts/index.html')

def posts(req):
  # Get start and end points
  start = int(req.GET.get('start') or 0)
  end = int(req.GET.get('end') or (start + 9))

  # Generate list of posts
  data = []
  for i in range(start, end + 1):
    data.append(f'Post #{i}')

  # Artificially delay speed of response
  time.sleep(1)

  # Return list of posts
  return JsonResponse({
    'posts': data
  })