import { Component, OnInit } from '@angular/core';
import { APIENDPOINT } from '../../config/configuration';
import { UserService } from '../../service/users/user.service';
import { UserModel } from 'src/app/models/user.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public UserList: UserModel[] = [];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.consumeUserService();
  }

public consumeUserService() {
   this.userService.get(APIENDPOINT.users)
   .subscribe((resp: any) => {
    this.UserList = resp;
   });
}

}
