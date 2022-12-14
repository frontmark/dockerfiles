# python-gunicorn-flask-app

A stripped-down example of a dockerized [Flask](https://flask.palletsprojects.com/en/2.2.x/) web application,

based on the official Docker image for [Python](https://hub.docker.com/_/python) :snake:, served by [Gunicorn](https://gunicorn.org/) :unicorn:

**Table of Contents**

- [Makefile](#makefile)
  - [Build the Docker image and run a container](#build-the-docker-image-and-run-a-container)
  - [Update the Pipfile.lock dependencies](#update-the-pipfilelock-dependencies)
- [fAPP folder](#fapp-folder)

## Makefile

The [Makefile](Makefile) can be used to easily manage the app using [GNU Make](https://www.gnu.org/software/make/) (on Linux, macOS and Windows ([Cygwin](https://www.cygwin.com/))).

### Build the Docker image and run a container

```sh
make reinit
```

will re(build)/re(run) the image/container (named - literally - `appname:latest`)

and serve an instance of the app via: [http://localhost:5000/appname](http://localhost:5000/appname)

It's a handy shortcut that you can use to reload the app after code has changed.

For more fine-grained control, please have a look at the included [Makefile](Makefile).

### Update the Pipfile.lock dependencies

```sh
make lock
```

will update your [Pipfile](Pipfile) dependencies and create a [Pipfile.lock](Pipfile.lock) thereafter

so that the build process is reproducible and deterministic, thus production-ready.

Note that only MINOR and PATCH versions are udpated automatically so as to not break something.\*

\*) assuming that the Python packages are following [Semantic Versioning](https://semver.org/) best practices.

## fAPP folder

The [fAPP](fAPP) folder contains the Flask app code itself. It's just a skeleton, but you can easily add, e.g.,
- more routes,
- jQuery,
- Bootstrap,
- etc.

The (empty) [public](fAPP/public) folder is meant to be used to serve a `favicon.ico` and/or `webclip.png` (a.k.a. `apple-touch-icon`). The code is already there (in [views.py](fAPP/views.py) and [index.html](fAPP/templates/index.html)), just uncomment it and place the appropriate file(s) inside the `public` folder (and remove the `.gitignore` file which you will then no longer need).

<!-- textlint-disable -->
Use the [custom.css](fAPP/static/custom.css) and [custom.js](fAPP/static/custom.js) files to easily add some custom CSS and JavaScript code to your app.
<!-- textlint-enable -->
