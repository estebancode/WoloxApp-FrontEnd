import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlbumService } from '../../service/albums/album.service';
import { AlbumModel } from 'src/app/models/album.model';
import { APIENDPOINT } from '../../config/configuration';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  id: number;
  public albumList: AlbumModel[] = [];

  constructor(private route: ActivatedRoute, private albumService: AlbumService) { }

  ngOnInit() {

    this.route.params.subscribe(params => {
      this.id = +params.id; // (+) converts string 'id' to a number
      this.consumeAlbumService();
   });

  }

public consumeAlbumService() {
  this.albumService.get(APIENDPOINT.albums).
  subscribe((resp: any) => {
    this.albumList = resp;
  });

}

}

