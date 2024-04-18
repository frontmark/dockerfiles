name = built-with-vcpkg
img  = $(name):latest

caps = --cap-drop ALL
sopt = --security-opt no-new-privileges
mem  = 
cpu  = 
pids = 
rofs = --read-only --tmpfs /tmp
args = $(caps) $(sopt) $(mem) $(cpu) $(pids) $(rofs)

.PHONY: all clean build run stop rm up down init reinit rerun
.DEFAULT_GOAL := all
all: build

clean: ;
build: clean
	docker build -t $(img) .
run:
	@docker run --rm $(args) --name $(name) --hostname $(name) $(img) ./build/main/progname --name Jane
stop rm:
	-docker container $@ $(name)

up: build run

down: stop rm

init: up

reinit: down init

rerun: down run
