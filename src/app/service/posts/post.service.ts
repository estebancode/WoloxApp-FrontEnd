import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from '../_baseService';
import { PostModel } from 'src/app/models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService extends BaseService<PostModel> {

  constructor(
    protected httpClient: HttpClient
) {
    super(httpClient);
}
}
