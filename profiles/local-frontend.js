/*global module*/
const frontendHost = (process.env.PLATFORM === 'linux') ? 'localhost' : 'host.docker.internal';
const SECTION = 'insights';
const APP_ID = 'advisor';
const routes = {};

routes[`/apps/${APP_ID}`] = { host: `http://${frontendHost}:8002` };
routes[`/beta/apps/${APP_ID}`] = { host: `http://${frontendHost}:8002` };
routes[`/beta/${SECTION}/${APP_ID}`] = { host: `http://${frontendHost}:8002`  };
routes[`/${SECTION}/${APP_ID}`] = { host: `http://${frontendHost}:8002`  };

routes[`/apps/inventory`] = { host: `http://${frontendHost}:8003` };
routes[`/beta/apps/inventory`] = { host: `http://${frontendHost}:8003` };
routes[`/beta/${SECTION}/inventory`] = { host: `http://${frontendHost}:8003`  };
routes[`/${SECTION}/inventory`] = { host: `http://${frontendHost}:8003`  };

routes[`/apps/cost-management`] = { host: `http://${frontendHost}:8004` };
routes[`/beta/apps/cost-management`] = { host: `http://${frontendHost}:8004` };
routes[`/cost-management`] = { host: `http://${frontendHost}:8004` };
routes[`/beta/cost-management`] = { host: `http://${frontendHost}:8004` };

module.exports = { routes };
