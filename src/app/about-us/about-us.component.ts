import {Component, Input, OnInit} from '@angular/core';
import { HttpService} from '../http.service';
import {Info} from "../about-us";
import {Tab} from "../tab";
import {GeneralInfo} from "../general-info";

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {



  @Input() Info: Info[]=[];

  // filepath = 'api/info.json';

  // constructor(private httpService: HttpService) { }
  constructor() { }


  ngOnInit() {


    // this.httpService.getData(this.filepath)
    //   .subscribe((data:Info) => this.info=data["infoContent"]);
  }

}
