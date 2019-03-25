import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from '../_baseService';
import { CommentModel } from 'src/app/models/comment.model';

@Injectable({
  providedIn: 'root'
})
export class CommentService extends BaseService<CommentModel> {

  constructor(
    protected httpClient: HttpClient
) {
    super(httpClient);
}
}
