## Getting Started Test-serve nestjs App

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


## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
