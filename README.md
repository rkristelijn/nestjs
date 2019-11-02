# NestJS

## Introduction

Theses are my NestJS adventures, noted down as I go and learn about NestJS.

My plan

- [x] getting started
- [ ] create a RESTful endpoint with integration tests
- [ ] create auth service
- [ ] connect with MongoDB
- [ ] play around with GraphQL

## Getting started

Assuming you have nothing installed, you will need:

1. git - you just gotta have git
2. nvm, node
3. mongodb
4. nest globally installed `npm i -g @nestjs/cli`

## Initial installation

After using `nest new project-name` we have (used `tree -I node_modules`)

```
├── README.md                    - documentation
├── nest-cli.json                -
├── package-lock.json            -
├── package.json                 - project configuration and scripts
├── src
│   ├── app.controller.spec.ts   - test file
│   ├── app.controller.ts        - Basic controller sample with a route.
│   ├── app.module.ts            - The root module of the application.
│   ├── app.service.ts
│   └── main.ts                  - The entry file of the application
├── test
│   ├── app.e2e-spec.ts
│   └── jest-e2e.json
├── tsconfig.build.json          - Typescript build config
├── tsconfig.json                - Typescript config
└── tslint.json                  - Typescript linting

```

Now is a good time to stick your stuff in git preferable using [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0-beta.4/)

## Initial running

`package.json` consists of a start script, but we want to see what is going on, so we add `DEBUG=*` before the start script

```
$ npm start

> nestjs@0.0.1 start /nestjs
> DEBUG=* nest start

  express:application set "x-powered-by" to true +0ms
  express:application set "etag" to 'weak' +2ms
  express:application set "etag fn" to [Function: generateETag] +0ms
  express:application set "env" to 'development' +1ms
  express:application set "query parser" to 'extended' +0ms
  express:application set "query parser fn" to [Function: parseExtendedQueryString] +0ms
  express:application set "subdomain offset" to 2 +0ms
  express:application set "trust proxy" to false +0ms
  express:application set "trust proxy fn" to [Function: trustNone] +0ms
  express:application booting in development mode +1ms
  express:application set "view" to [Function: View] +0ms
  express:application set "views" to '/nestjs/views' +0ms
  express:application set "jsonp callback name" to 'callback' +0ms
[Nest] 19599   - 02/11/2019, 14:56:52   [NestFactory] Starting Nest application...
[Nest] 19599   - 02/11/2019, 14:56:52   [InstanceLoader] AppModule dependencies initialized +10ms
  express:router use '/' query +26ms
  express:router:layer new '/' +0ms
  express:router use '/' expressInit +0ms
  express:router:layer new '/' +0ms
  express:router use '/' jsonParser +0ms
  express:router:layer new '/' +1ms
  express:router use '/' urlencodedParser +0ms
  express:router:layer new '/' +0ms
[Nest] 19599   - 02/11/2019, 14:56:52   [RoutesResolver] AppController {/}: +4ms
  express:router:route new '/' +2ms
  express:router:layer new '/' +0ms
  express:router:route get '/' +0ms
  express:router:layer new '/' +0ms
[Nest] 19599   - 02/11/2019, 14:56:52   [RouterExplorer] Mapped {/, GET} route +9ms
  express:router use '/' <anonymous> +9ms
  express:router:layer new '/' +0ms
  express:router use '/' <anonymous> +0ms
  express:router:layer new '/' +0ms
[Nest] 19599   - 02/11/2019, 14:56:52   [NestApplication] Nest application successfully started +2ms
```

note it uses the [factory pattern](https://dev.to/duranenmanuel/creating-objects-dynamically-with-factory-pattern-in-javascript-54ah)

Also NestJs uses [Typescript](https://dev.to/robertcoopercode/get-started-with-typescript-in-2019-6hd), [async/await](https://dev.to/gafi/7-reasons-to-always-use-async-await-over-plain-promises-tutorial-4ej9)

Hey look! a [similar tutorial](https://medium.com/@amitprabhu/rest-api-using-nestjs-c445d0abc91e) and [another adding GraphQL](https://dev.to/itminds/how-to-architecture-your-javascript-api-using-nestjs-with-a-graphql-api-example-part-1-2-2jcb)

## Add MongoDB and Mongoose

```
npm i --save mongoose
npm i --save-dev @types/mongoose
```

## Original Readme

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[travis-image]: https://api.travis-ci.org/nestjs/nest.svg?branch=master
[travis-url]: https://travis-ci.org/nestjs/nest
[linux-image]: https://img.shields.io/travis/nestjs/nest/master.svg?label=linux
[linux-url]: https://travis-ci.org/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="blank">Node.js</a> framework for building efficient and scalable server-side applications, heavily inspired by <a href="https://angular.io" target="blank">Angular</a>.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore"><img src="https://img.shields.io/npm/dm/@nestjs/core.svg" alt="NPM Downloads" /></a>
<a href="https://travis-ci.org/nestjs/nest"><img src="https://api.travis-ci.org/nestjs/nest.svg?branch=master" alt="Travis" /></a>
<a href="https://travis-ci.org/nestjs/nest"><img src="https://img.shields.io/travis/nestjs/nest/master.svg?label=linux" alt="Linux" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#5" alt="Coverage" /></a>
<a href="https://gitter.im/nestjs/nestjs?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=body_badge"><img src="https://badges.gitter.im/nestjs/nestjs.svg" alt="Gitter" /></a>
<a href="https://opencollective.com/nest#backer"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec"><img src="https://img.shields.io/badge/Donate-PayPal-dc3d53.svg"/></a>
  <a href="https://twitter.com/nestframework"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

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
