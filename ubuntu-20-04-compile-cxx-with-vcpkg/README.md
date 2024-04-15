# ubuntu-20-04-compile-cxx-with-vcpkg

Basic example of a dockerized multi-stage build process for a C++ program that *does* use `vcpkg` to manage dependencies.

For an example that does **not** use `vcpkg` to manage dependencies, please see [../ubuntu-20-04-compile-cxx-without-vcpkg](../ubuntu-20-04-compile-cxx-without-vcpkg).

**Table of Contents**

- [Makefile](#makefile)
  - [Build and run the code](#build-and-run-the-code)

## Makefile

The [Makefile](Makefile) can be used to easily manage the build process using [GNU Make](https://www.gnu.org/software/make/) (on Linux, macOS and Windows ([Cygwin](https://www.cygwin.com/))).

### Build and run the code

```sh
make reinit
```

will build the code and run the built program.

It's a handy shortcut that you can use to redo everything after the code has changed.

For more fine-grained control, please have a look at the included [Makefile](Makefile).

You should see the following output:

```sh
docker build -t built-with-vcpkg:latest .
[+] Building 202.6s (16/16) FINISHED                                                               docker:desktop-linux
 => [internal] load build definition from Dockerfile                                                               0.0s
 => => transferring dockerfile: 1.53kB                                                                             0.0s
 => [internal] load metadata for docker.io/library/ubuntu:20.04                                                    1.6s
 => [internal] load .dockerignore                                                                                  0.1s
 => => transferring context: 2B                                                                                    0.0s
 => [internal] load build context                                                                                  0.0s
 => => transferring context: 1.31kB                                                                                0.0s
 => [stage-1 1/4] FROM docker.io/library/ubuntu:20.04@sha256:80ef4a44043dec4490506e6cc4289eeda2d106a70148b74b5ae9  0.0s
 => => resolve docker.io/library/ubuntu:20.04@sha256:80ef4a44043dec4490506e6cc4289eeda2d106a70148b74b5ae91ee670e9  0.0s
 => => sha256:80ef4a44043dec4490506e6cc4289eeda2d106a70148b74b5ae91ee670e9c35d 1.13kB / 1.13kB                     0.0s
 => => sha256:4aa61d4985265be6d872cc214016f2f91a77b1c925dab5ce502db2edc4a7e5af 424B / 424B                         0.0s
 => => sha256:3048ba0785953b689215053519eb1c34853e2e3af512eed001be59fec1f32e42 2.31kB / 2.31kB                     0.0s
 => [build 2/8] RUN apt-get update   && DEBIAN_FRONTEND=noninteractive apt-get install -y --no-install-recommend  16.2s
 => [stage-1 2/4] RUN groupadd -r otto && useradd -r -g otto otto                                                  0.3s
 => [stage-1 3/4] WORKDIR /home/otto                                                                               0.0s
 => [build 3/8] WORKDIR /root                                                                                      0.0s
 => [build 4/8] RUN   wget --progress=dot:giga -O - https://apt.kitware.com/keys/kitware-archive-latest.asc 2>/d  26.4s
 => [build 5/8] RUN   git clone https://github.com/microsoft/vcpkg   && ./vcpkg/bootstrap-vcpkg.sh                65.2s
 => [build 6/8] RUN   vcpkg/vcpkg install     boost-iostreams     boost-program-options                           91.5s
 => [build 7/8] COPY src/ ./src                                                                                    0.0s
 => [build 8/8] RUN cmake -DCMAKE_BUILD_TYPE=Release -S src -B src/build   -DCMAKE_TOOLCHAIN_FILE=/root/vcpkg/scr  1.4s
 => [stage-1 4/4] COPY --from=build /root/src/build/ ./build                                                       0.0s
 => exporting to image                                                                                             0.0s
 => => exporting layers                                                                                            0.0s
 => => writing image sha256:950072b6eb7802f8f30d3fdf09897376b3d6001d972a2471c935cd21ca56eef3                       0.0s
 => => naming to docker.io/library/built-with-vcpkg:latest                                                         0.0s

Hello, Jane!
```
