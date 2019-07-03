# Zephyr API + Admin

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
