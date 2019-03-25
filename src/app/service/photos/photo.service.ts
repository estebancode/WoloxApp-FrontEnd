import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from '../_baseService';
import { PhotoModel } from 'src/app/models/photo.model';

@Injectable({
  providedIn: 'root'
})
export class PhotoService extends BaseService<PhotoModel> {

  constructor(
    protected httpClient: HttpClient
) {
    super(httpClient);
}
}
