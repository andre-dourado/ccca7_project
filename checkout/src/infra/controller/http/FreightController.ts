import CalculateFreightDistance from '../../../application/CalculateFreightDistance';
import Connection from '../../database/Connection';
import Http from '../../http/Http';
import AddressRepositoryDatabase from '../../repository/database/AddressRepositoryDatabase';

export default class FreightController {

    constructor (readonly http: Http, readonly connection: Connection) {
        http.on("post", "/freight/distance", function (params: any, body: any) {
            const addressRepository = new AddressRepositoryDatabase(connection);
            const freightService = new CalculateFreightDistance(addressRepository);
            const output = freightService.execute(body);
            return output;
        })
    }
}