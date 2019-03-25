import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlbumService } from '../../service/albums/album.service';
import { AlbumModel } from 'src/app/models/album.model';
import { APIENDPOINT } from '../../config/configuration';

@Component({
  selector: 'app-useralbum',
  templateUrl: './useralbum.component.html',
  styleUrls: ['./useralbum.component.css']
})
export class UseralbumComponent implements OnInit {

  id: number;
  public albumByUserList: AlbumModel[] = [];

  constructor(private albumService: AlbumService, private route: ActivatedRoute) { }

  ngOnInit() {

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

}
