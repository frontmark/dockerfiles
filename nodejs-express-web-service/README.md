# nodejs-express-web-service

A stripped-down example of a dockerized [Express](https://expressjs.com) (4.x) web service,

based on the official Docker image for [Node.js](https://hub.docker.com/_/node).

**Table of Contents**

- [Makefile](#makefile)
  - [Build the Docker image and run a container](#build-the-docker-image-and-run-a-container)
  - [Update the package-lock.json dependencies](#update-the-package-lockjson-dependencies)
- [server.js](#serverjs)

## Makefile

The [Makefile](Makefile) can be used to easily manage the web service using [GNU Make](https://www.gnu.org/software/make/) (on Linux, macOS and Windows ([Cygwin](https://www.cygwin.com/))).

### Build the Docker image and run a container

```sh
make reinit
```

will re(build)/re(run) the image/container (named - literally - `servicename:latest`)

and serve an instance of the web service via: [http://localhost:8080/servicename](http://localhost:8080/servicename)

It's a handy shortcut that you can use to reload the web service after code has changed.

For more fine-grained control, please have a look at the included [Makefile](Makefile).

### Update the package-lock.json dependencies

```sh
make lock
```

will update your [package.json](package.json) dependencies and create a [package-lock.json](package-lock.json) thereafter

so that the build process is reproducible and deterministic, thus production-ready.

Note that only MINOR and PATCH versions are udpated automatically so as to not break something.\*

\*) assuming that the Node.js packages are following [Semantic Versioning](https://semver.org/) best practices.

## server.js

The [server.js](server.js) contains the server's JS code. It's just a skeleton, but you can easily add, e.g.,
- more routes,
- middleware functions,
- etc.

And you are strongly encouraged to test your web service with, e.g., [Mocha](https://mochajs.org) :coffee: and [Chai](https://www.chaijs.com).
