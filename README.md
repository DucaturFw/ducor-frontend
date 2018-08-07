# ducor-frontend
[![Build Status](https://travis-ci.org/DucaturFw/ducor-frontend.svg?branch=master)](https://travis-ci.org/DucaturFw/ducor-frontend)

### Docker

#### Run frontend container

In project root directory:

    docker build -t ducor-frontend .
    docker run -p 80:80 ducor-frontend

The docker image is build in 2 stages:
1. npm build from NodeJS image
2. nginx static files serving (on http (80) port)

For tests:

    docker-compose -f docker-compose.test.yml up