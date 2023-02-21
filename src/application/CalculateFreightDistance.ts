import AddressRepository from '../domain/repository/AddressRepository';

export default class CalculateFreightDistance {
    
    constructor (readonly addressRepository: AddressRepository) {
    }

    async execute (input: Input): Promise<Output> {
        const address1 = await this.addressRepository.getAddress(input.cep1);
        const address2 = await this.addressRepository.getAddress(input.cep2);
        const cord1: Coordinate = { lat: address1.latitude, long: address1.longitude };
        const cord2: Coordinate = { lat: address2.latitude, long: address2.longitude };
        const distance = this.getDistanceBetweenTwoPoints(cord1, cord2);
        return { distance };
    }

    getDistanceBetweenTwoPoints (cord1: Coordinate, cord2: Coordinate) {
        if (cord1.lat == cord2.lat && cord1.long == cord2.long) return 0;
        const radlat1 = (Math.PI * cord1.lat) / 180;
        const radlat2 = (Math.PI * cord2.lat) / 180;
        const theta = cord1.long - cord2.long;
        const radtheta = (Math.PI * theta) / 180;
        let dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
        if (dist > 1) dist = 1;
        dist = Math.acos(dist);
        dist = (dist * 180) / Math.PI;
        dist = dist * 60 * 1.1515;
        dist = dist * 1.609344; //convert miles to km
        return dist;
    }
}

type Input = {
    cep1: string,
    cep2: string
}

type Output = {
    distance: number
}

type Coordinate = {
	lat: number;
	long: number;
};