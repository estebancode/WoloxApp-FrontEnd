import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from '../_baseService';
import { AlbumModel } from 'src/app/models/album.model';

@Injectable({
  providedIn: 'root'
})
export class AlbumService extends BaseService<AlbumModel> {

  constructor(
    protected httpClient: HttpClient
) {
    super(httpClient);
}
}
