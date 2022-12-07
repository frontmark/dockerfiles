from datetime import datetime

from flask import (
    Flask,
    make_response,
    render_template,
    # send_from_directory,
)
from flask_compress import Compress

app = Flask(__name__, static_url_path="/appname/static")
Compress(app)


@app.context_processor
def inject_now():
    return dict(now=datetime.now())


# @app.route("/favicon.ico")
# def favicon_ico():
#    return send_from_directory("public", "favicon.ico")

# @app.route("/webclip.png")
# def webclip_png():
#    return send_from_directory("public", "webclip.png")


@app.route("/appname")
def index():
    resp = make_response(
        render_template(
            "index.html",
        )
    )
    return resp
