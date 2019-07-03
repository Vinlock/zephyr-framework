// @flow
import path from 'path';
import fastify from 'fastify';
import fastifyStatic from 'fastify-static';

/**
 * Initialize Admin App
 * @param {object} [fastifyOptions={}] Additional Fastify options
 * @returns {fastify.FastifyInstance}
 */
export default (fastifyOptions: ?fastify.ServerOptions = {}): fastify.FastifyInstance => {
  // Create App
  const app = fastify(fastifyOptions);

  // Set Static
  app.register(fastifyStatic, {
    root: path.join(__dirname, 'public'),
  });

  return app;
};
