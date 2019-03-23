import { GeoModel } from './geo.model';

export class AddressModel {
    public street: string;
    public suite: string;
    public city: string;
    public zipcode: string;
    public geo: GeoModel;
}
