## Getting Started Test-serve nestjs App (node -v 14.18.0)

If you wish to run this application in a local environment
we will need follow 2 steps:

 required the following environment variables:

*Step 1:
```bash
BASIC_TOKEN=
PORT=
API_KEY=
```

Please remember to use the `.env.example` file that we have in our dir folder
rename this file deleting ".example"

*Step 2:

We will need to run our Dockerfile to do that, we just need to run the following commands:

```bash
- docker build -t nestapp .
- docker run -p <PORT>:<PORT> nestapp .
```
please remember to remove `<PORT>` for the port of your choice.


We also have a live production of this project but required a `api-key` to have access.

## link: https://nestservertest.herokuapp.com/

#How to run without Docker

(only if we also wish to run our server on local)

$Use following command with node -v 14.18.0:

## npm install

install all dependencies needed.

## npm start

start the server.
