import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { PostService } from '../../service/posts/post.service';
import { CommentService } from '../../service/comments/comment.service';
import { PostModel } from 'src/app/models/post.model';
import { CommentModel } from 'src/app/models/comment.model';
import { APIENDPOINT } from '../../config/configuration';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

public postList: PostModel[] = [];
public commentList: CommentModel[] = [];
closeResult: string;

  constructor(private postService: PostService,
              private modalService: NgbModal,
              private commentsService: CommentService) { }

  ngOnInit() {
    this.consumePostService();
  }

public consumePostService() {
  this.postService.get(APIENDPOINT.posts).
  subscribe((resp: any) => {
    this.postList = resp;
  });
}

open(content, id) {
  this.consumeCommentsGetAllByPostId(id);
  this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title', size: 'lg', centered: true}).result.then((result) => {
    this.closeResult = `Closed with: ${result}`;
  }, (reason) => {
    this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  });
}

private getDismissReason(reason: any): string {
  if (reason === ModalDismissReasons.ESC) {
    return 'by pressing ESC';
  } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
    return 'by clicking on a backdrop';
  } else {
    return  `with: ${reason}`;
  }
}

public consumeCommentsGetAllByPostId(id: number) {
this.commentsService.get(`${APIENDPOINT.commentsGetByPostId}${id}`).
subscribe((resp: any) => {
  this.commentList = [];
  this.commentList = resp;
});
}

}
