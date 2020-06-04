import { Component, OnInit } from '@angular/core';
import { HttpServerService } from '../services/httpServer.service';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.scss']
})
export class HomeScreenComponent implements OnInit {
  title = 'Fabulous Home';
  public selectedItem = 'home';
  public filters;
  public videos;

  constructor(
    public httpService: HttpServerService
  ) {}

  public ngOnInit() {
    // this.fetchFilters();
    // this.fetchVideos();
  }

  public changeSelection(navItem) {
    this.selectedItem = navItem;
  }

  public fetchFilters() {
    this.httpService.fetchFilters().subscribe(filterResults => {
      this.filters = filterResults;
    }, (err) => {
      // if we want to handle error
    });
  }

  public fetchVideos() {
    this.httpService.fetchVideos().subscribe(videoResults => {
      this.videos = videoResults;
    }, (err) => {
      // if we want to handle error
    });
  }


}
