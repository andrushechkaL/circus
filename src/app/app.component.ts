import { Component } from '@angular/core';
import {HttpService} from "./http.service";
import {Info} from "./about-us";
import {Tab} from "./tab";
import {Menu} from "./menu";
import {Image} from "./Image";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'third-try';


  Info: Info[] = [];
  Tab: Tab[] = [];
  Menu: Menu[] = [];
  Image: Image[] = [];
  filepath = './api/data.json';

  constructor(private httpService: HttpService) { }

  ngOnInit() {

    this.httpService.getData(this.filepath)
      .subscribe(data => {
        this.Info = data["infoContent"];
        this.Tab = data["tabList"];
        this.Menu = data["menu"];
        this.Image = data["gallery"];
      });
  }
}
