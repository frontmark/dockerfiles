FROM ubuntu:20.04 as build
SHELL ["/bin/bash", "-o", "pipefail", "-c"]
RUN apt-get update \
  && DEBIAN_FRONTEND=noninteractive apt-get install -y --no-install-recommends \
    build-essential \
    ca-certificates git \
    curl zip unzip tar \
    wget gpg \
    ninja-build \
    pkg-config \
  && rm -rf /var/lib/apt/lists/*
WORKDIR /root
# install - latest - cmake:
RUN \
  wget --progress=dot:giga -O - https://apt.kitware.com/keys/kitware-archive-latest.asc 2>/dev/null | gpg --dearmor - | tee /usr/share/keyrings/kitware-archive-keyring.gpg >/dev/null \
  && echo 'deb [signed-by=/usr/share/keyrings/kitware-archive-keyring.gpg] https://apt.kitware.com/ubuntu/ focal main' | tee /etc/apt/sources.list.d/kitware.list >/dev/null \
  && apt-get update \
  && DEBIAN_FRONTEND=noninteractive apt-get install -y --no-install-recommends \
    cmake \
  && rm -rf /var/lib/apt/lists/*
# needed on arm, s390x, ppc64le and riscv platforms:
ENV VCPKG_FORCE_SYSTEM_BINARIES=1
# bootstrap vcpkg:
RUN \
  git clone https://github.com/microsoft/vcpkg \
  && ./vcpkg/bootstrap-vcpkg.sh
# install boost:
RUN \
  vcpkg/vcpkg install \
    boost-iostreams \
    boost-program-options
COPY src/ ./src
RUN cmake -DCMAKE_BUILD_TYPE=Release -S src -B src/build \
  -DCMAKE_TOOLCHAIN_FILE=/root/vcpkg/scripts/buildsystems/vcpkg.cmake \
  && cd src/build/main \
  && make

FROM ubuntu:20.04
RUN groupadd -r otto && useradd -r -g otto otto
WORKDIR /home/otto
COPY --from=build /root/src/build/ ./build
USER otto
