// @flow
import fastify from 'fastify';

/**
 * Initialize App
 * @param {object} [fastifyOptions={}] Additional Fastify options
 * @returns {fastify.FastifyInstance}
 */
export default (fastifyOptions: ?fastify.ServerOptions = {}): fastify.FastifyInstance => {
  // Create App
  return fastify(fastifyOptions);
};
