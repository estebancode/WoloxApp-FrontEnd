import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhotoService } from '../../service/photos/photo.service';
import { AlbumService } from '../../service/albums/album.service';
import { PhotoModel } from 'src/app/models/photo.model';
import { AlbumModel } from 'src/app/models/album.model';
import { APIENDPOINT } from '../../config/configuration';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {

  id: number;
  userId: number;
  public photoList: PhotoModel[] = [];
  public albumSelect: AlbumModel;

  constructor(private photoService: PhotoService,
              private route: ActivatedRoute,
              private albumService: AlbumService) { }

  ngOnInit() {

    this.route.params.subscribe(params => {
      this.id = +params.id; // (+) converts string 'id' to a number
      this.userId = +params.userid; // (+) converts string 'id' to a number
      this.consumeAlbumGetById(this.id);
      this.consumePhotoByAlbumService(this.id);
    });

  }

  public consumePhotoByAlbumService(id: number) {
    this.photoService.get(`${APIENDPOINT.photosByAlbum}${id}`).
      subscribe((resp: any) => {
        this.photoList = resp;
      });
  }

  public consumeAlbumGetById(id: number) {
    this.albumService.get(`${APIENDPOINT.albumGetById}${id}`).
      subscribe((resp: any) => {
        this.albumSelect = resp;
      });
  }

}
