import { PermissionModel } from './permision.model';

export class AlbumModel {
    public userId: number;
    public id: number;
    public title: string;
    public permissions: PermissionModel[];
}
