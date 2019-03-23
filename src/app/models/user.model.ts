import { AddressModel } from './address.model';
import { CompanyModel } from './company.model';

export class UserModel {
    public id: number;
    public name: string;
    public username: string;
    public email: string;
    public address: AddressModel;
    public phone: string;
    public website: string;
    public company: CompanyModel;
}
