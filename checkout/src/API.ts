import OrderController from './infra/controller/http/OrderController';
import ExpressAdapter from './infra/http/ExpressAdapter';
import GetItemHttpGateway from './infra/gateway/GetItemHttpGateway';
import PreviewOrder from './application/PreviewOrder';

const http = new ExpressAdapter();
const getItemGateway = new GetItemHttpGateway();
const previewOrder = new PreviewOrder(getItemGateway);
new OrderController(http, previewOrder);
http.listen(3000);