FROM ubuntu:20.04 as build
RUN apt-get update \
  && DEBIAN_FRONTEND=noninteractive apt-get install -y --no-install-recommends \
    build-essential \
    cmake \
    libboost-dev \
    libboost-program-options-dev \
  && rm -rf /var/lib/apt/lists/*
WORKDIR /root
COPY src/ ./src
RUN cmake -DCMAKE_BUILD_TYPE=Release -S src -B src/build \
  && cmake --build src/build

FROM ubuntu:20.04
RUN groupadd -r otto && useradd -r -g otto otto
WORKDIR /home/otto
COPY --from=build /root/src/build/ ./build
USER otto
