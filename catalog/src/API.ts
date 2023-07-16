import ItemController from './infra/controller/http/ItemController';
import ExpressAdapter from './infra/http/ExpressAdapter';
import PgPromiseAdapter from './infra/database/PgPromiseAdapter';
import ItemRepositoryDatabase from './infra/repository/database/ItemRepositoryDatabase';
import GetItem from './application/GetItem';

const http = new ExpressAdapter();
const connection = new PgPromiseAdapter();
const itemRepository = new ItemRepositoryDatabase(connection);
const getItem = new GetItem(itemRepository);
new ItemController(http, getItem);
http.listen(3004);