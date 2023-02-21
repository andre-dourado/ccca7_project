import Address from '../entities/Address';

export default interface AddressRepository {
    getAddress(cep: string): Promise<Address>;
}