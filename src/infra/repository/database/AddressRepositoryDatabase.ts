import Address from '../../../domain/entities/Address';
import AddressRepository from '../../../domain/repository/AddressRepository';
import Connection from '../../database/Connection';

export default class AddressRepositoryDatabase implements AddressRepository {

    constructor (readonly connection: Connection) {
    }

    async getAddress(cep: string): Promise<Address> {
        const [addressData] = await this.connection.query("select * from ccca.address where cep = $1", [cep]);
        const address = new Address(addressData.cep, Number.parseFloat(addressData.latitude), Number.parseFloat(addressData.longitude));
        return address;
    }
}