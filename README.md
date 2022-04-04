# Node-Mongo-JWT-Docker-ReactJS
Tutorial All Create node, mong, jwt,docker in reactJs

## What you need ?

## 🚀 Skills

> node.js 16 version <code><img height="32" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png" alt="Nodejs"/></code>

> Mongodb service <code><img height="32" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mongodb/mongodb.png" alt="MongoDB"/></code>

> Docker and Docker-Compose


<!-- GETTING STARTED -->
## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

_Below is an example of how you can instruct your audience on installing and setting up your app. This template doesn't rely on any external dependencies or services._

1. Get a free API Key at [https://example.com](https://example.com)
2. Clone the repo
   ```sh
   git clone https://github.com/higorlucas125/Node-Mongo-JWT-Docker-ReactJS.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Enter your MONGO_URL in `.env`
   ```js
   ./back-end/.env  MONGOURL= YOU_URL
   ```
5. Enter to starting application
    ```sh
    npm run start
   ```
<p align="right">(<a href="#top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->
## Usage recommended

It is recommended that you use docker to upload the application. So docker will upload four applications, one Back_end, Front_end, MongoService, Mongo_express.


### Prerequisites

You need to have docker installed on your machine and docker-compose

  _Documentation of docker to install [Documentation](https://docs.docker.com/engine/install/ubuntu/)_

_step by step on how to upload the application_

1 . Inside the root directory run the following command
 ```sh
    docker-compose up --force-recreate --build -d
 ```
2 . After starting, open url [Monogo_express](http://localhost:8081)

3 . Open port [Front-End](http://localhost:3001)

4 . Open port [Back-End](http://localhost:3000)

