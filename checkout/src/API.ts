// main
import OrderController from './infra/controller/http/OrderController';
import ExpressAdapter from './infra/http/ExpressAdapter';
import PgPromiseAdapter from './infra/database/PgPromiseAdapter';
import FreightController from './infra/controller/http/FreightController';

// Frameworks and Adapters
const http = new ExpressAdapter();
const connection = new PgPromiseAdapter();
// Interface Adapters
new OrderController(http, connection);
new FreightController(http, connection);
http.listen(3000);