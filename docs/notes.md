# Usefulness
+ Docker Under the hood: 
    - https://medium.com/@saschagrunert/demystifying-containers-part-i-kernel-space-2c53d6979504
    - https://www.youtube.com/watch?v=-YnMr1lj4Z8&t=142s

+ Whilst explaining FROM (scratch image):
    - https://docs.docker.com/build/building/base-images/#creating-a-simple-parent-image-using-scratch

# Show Docker Engine API
  - https://docs.docker.com/engine/api/
  - `curl --unix-socket /var/run/docker.sock http://localhost/version`

# General Informative Commands
docker version
docker info
docker system df
docker --help

# Docker Hub (Registry)
docker login
docker logout
docker push `or` docker image pull
docker search hello-world

# Getting Images
First Image: https://hub.docker.com/_/hello-world
docker pull hello-world

# List Images
docker images `or` docker image ls

# Remove images
docker rmi hello-world

# Running Images
docker run hello-world

# Running Ubuntu Image
docker run ubuntu
docker run -it ubuntu or `docker run -it ubuntu /bin/bash` 

# Running Ubuntu Image Background 
docker run -i -t -d ubuntu

# List Containers
docker ps `or` docker container ls
docker ps -a

# Build Image
docker build 
docker image build Dockerfile

# Generic Cleanup
docker system prune

# Publishing Your Own Images
docker tag mooshak <user>/<img>:<tag>
docker push <user>/<img>
