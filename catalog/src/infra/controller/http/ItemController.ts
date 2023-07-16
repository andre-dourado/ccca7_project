import Http from '../../http/Http';
import GetItem from '../../../application/GetItem';

export default class ItemController  {

    constructor (readonly http: Http, readonly getItem: GetItem) {
        http.on("get", "/items/:idItem", async function (params: any, body: any) {
            const output = await getItem.execute(params.idItem);
            return output;
        });
    }
}