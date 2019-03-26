import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute } from '@angular/router';
import { AlbumService } from '../../service/albums/album.service';
import { AlbumModel } from 'src/app/models/album.model';
import { UserService } from '../../service/users/user.service';
import { UserModel } from 'src/app/models/user.model';
import { APIENDPOINT } from '../../config/configuration';

@Component({
  selector: 'app-useralbum',
  templateUrl: './useralbum.component.html',
  styleUrls: ['./useralbum.component.css']
})
export class UseralbumComponent implements OnInit {

  id: number;
  closeResult: string;
  public albumByUserList: AlbumModel[] = [];
  public userList: UserModel[] = [];
  public albumModel: AlbumModel;
  public isCollapsedAdd = false;
  public isCollapsedList = false;
  public newPermision: FormGroup;
  public userModel: UserModel;

  constructor(private albumService: AlbumService,
              private route: ActivatedRoute,
              private modalService: NgbModal,
              private userService: UserService) { }

  ngOnInit() {
    this.consumeUserService();
    this.validateForm();
    this.route.params.subscribe(params => {
      this.id = +params.id; // (+) converts string 'id' to a number
      this.consumeAlbumByUserService(this.id);
   });

  }

  public consumeAlbumByUserService(id: number) {
    this.albumService.get(`${APIENDPOINT.albumsByUser}${id}`).
    subscribe((resp: any) => {
      this.albumByUserList = resp;
    });
  }

  open(content, album) {
    this.albumModel = null;
    this.albumModel = album;
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

  public consumeUserService() {
    this.userService.get(APIENDPOINT.users).
    subscribe((resp: any) => {
      this.userList = resp;
    });
  }

  savePermision() {
      this.albumModel.permissions = this.newPermision.value;
      this.albumService.put(`${APIENDPOINT.albumsPermission}${this.albumModel.id}`, '', this.albumModel).
      subscribe((resp: any) => {
        console.log(resp);
      });
  }

  validateForm() {
    // tslint:disable-next-line:prefer-const
    let userId = new FormControl('',
      [
        Validators.required,
        Validators.pattern('^[0-9]*$'),
        Validators.minLength(8),
      ]);
    // tslint:disable-next-line:prefer-const
    let read = new FormControl('',
      [

      ]);
    // tslint:disable-next-line:prefer-const
    let write = new FormControl('',
      [
      ]);
    this.newPermision = new FormGroup({
      userId,
      read,
      write
    });
  }

}
