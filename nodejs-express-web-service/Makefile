name = servicename
img  = $(name):latest

caps = --cap-drop ALL
sopt = --security-opt no-new-privileges
mem  = --memory 256M --memory-swap -1
cpu  =
pids = --pids-limit 32
fail = --restart=on-failure:5
rofs = --read-only --tmpfs /tmp
args = $(caps) $(sopt) $(mem) $(cpu) $(pids) $(fail) $(rofs)

.PHONY: all clean build run stop start restart rm up down init reinit rerun
.DEFAULT_GOAL := all
all: build

clean: ;
build: clean
	docker build -t $(img) .
run:
	docker run $(args) --name $(name)1 --hostname $(name)1 -p 8080:8080 --init $(img)
stop start restart rm:
	-docker container $@ $(name)1

up: build run

down: stop rm

init: up

reinit: down init

rerun: down run

include ../Makefile-path
include ../Makefile-lock
