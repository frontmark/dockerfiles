import requests
import sys

r = requests.options("http://localhost:5000/appname")
if r.status_code == 200:
    sys.exit(0)
else:
    sys.exit(1)
