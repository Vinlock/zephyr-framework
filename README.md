# Zephyr API + Admin

## What is Zephyr?
Zephyr is an API/Admin Framework for developers to serve a RESTful and/or GraphQL Interface based on a straight-forward API. It brings together the latest technologies and their speed to give you this functionality.  

Dependent on [Fastify](https://github.com/fastify/fastify) for API, [Pino](https://github.com/pinojs/pino) for logging, [Axios](https://github.com/axios/axios) for external calls, and [GatsbyJS](https://github.com/gatsbyjs/gatsby) for the admin panel.   

## Installation
```bash
yarn add zephyr-framework
```

## Usage
**Option 1:** Just start it.  
```js
import zephyr from 'zephyr-framework';

zephyr().then(() => {
  console.log('Server has started.');
});
```

**Option 2:** Start the server and admin with custom fastify server and listen options.  
For `serverOptions` and `listenOptions` see https://github.com/fastify/fastify/blob/master/docs/Server.md. They match Fastify's options schema.  
```js
import { startAdmin } from 'zephyr-framework';

startAdmin({
  serverOptions: {},
  listenOptions: {},
}).then(startServer => startServer({
  serverOptions: {},
  listenOptions: {},
})).then(() => {
  console.log('Server has started.');
});
```
