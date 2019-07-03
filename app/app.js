// @flow
import fastify from 'fastify';
import admin from './admin';
import server from './server';

let serverPort = 4000;
let serverConfigured = false;

let adminPort = 7425;
let adminConfigured = false;

type ServerProps = {
  serverOptions: ?fastify.ServerOptions,
  listenOptions: ?fastify.ListenOptions,
};

const startServer = async (options: ?ServerProps) => {
  const defaults = {
    port: serverPort,
    host: '0.0.0.0',
  };
  if (options.listenOptions.port !== undefined) {
    serverPort = options.listenOptions.port;
  }
  serverConfigured = true;
  if (adminConfigured && serverPort === adminPort) {
    throw new Error('PORT_USED_BY_ADMIN');
  }
  return server(options.serverOptions).listen({
    ...defaults,
    ...options.listenOptions,
  })
};

export const startAdmin = async (options: ?ServerProps): Promise<startServer> => {
  const defaults = {
    port: serverPort,
    host: '0.0.0.0',
  };
  if (options.listenOptions.port !== undefined) {
    adminPort = options.listenOptions.port;
  }
  adminConfigured = true;
  if (serverConfigured && adminPort === serverPort) {
    throw new Error('PORT_USED_BY_SERVER');
  }
  return admin(options.serverOptions).listen({
    ...defaults,
    ...options.listenOptions,
  }).then(() => startServer);
};

export default async () => {
  const startServer = await startAdmin();
  await startServer();
};
