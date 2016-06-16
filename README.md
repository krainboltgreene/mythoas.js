# api


# Development Setup

  1. npm install
  2. NODE_ENV=development npm start

# Docker Setup

  1. `$ git clone lacqueristas/api`
  2. install docker-toolbox
  3. dump .env
  4. `$ docker-compose build`
  5. `$ docker-compose run api npm run data:migrate`
  6. `$ docker-compose run api npm run data:seed`
  7. `$ docker-compose up`
