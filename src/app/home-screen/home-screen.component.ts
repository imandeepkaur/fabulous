import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.scss']
})
export class HomeScreenComponent implements OnInit {
  title = 'Fabulous Home';
  public selectedItem = 'home';

  constructor() {}

  public ngOnInit() {

  }

  public changeSelection(navItem) {
    this.selectedItem = navItem;

  }
}
