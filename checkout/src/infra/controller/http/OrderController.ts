import Http from '../../http/Http';
import PreviewOrder from '../../../application/PreviewOrder';
export default class OrderController {

    constructor (readonly http: Http, readonly previewOrder: PreviewOrder) {
        http.on("post", "/orderPreview", function (params: any, body: any) {
            const output = previewOrder.execute(body);
            return output;
        });
    }
}