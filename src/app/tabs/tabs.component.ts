import {Component, Input, OnInit, SimpleChanges} from '@angular/core';
import { HttpService} from '../http.service';
import {Tab} from "../tab";
import {Info} from "../about-us";
import {checkAndUpdateQuery} from "@angular/core/src/view/query";

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {

  // tabs: Tab[] = [
  //   { id: 0, count: 1, title: 'Tab1', text: 'Content tab`s №1' },
  //   { id: 1, count: 0, title: 'Tab2', text: 'Content tab`s №2' },
  //   { id: 2, count: 0, title: 'Tab3', text: 'Content tab`s №3' },
  // ];


  @Input() tabs: Tab[]=[];

  // tabs: Tab[]=[];
  selectedTab: Tab = this.tabs[0];
  filepath = 'api/data.json';



  constructor(private httpService: HttpService) {

  }

  ngOnInit() {


    // this.httpService.getData(this.filepath)
    //   .subscribe(data => this.tabs=data["tabList"]);
  }





  onSelect(tab: Tab): void {
    console.log(this.tabs);
    this.selectedTab  = tab;
    tab.count += 1;


  }

  onSelectClose(tab:Tab): void {
    let i = this.tabs.findIndex(t=> t ==tab);
    if(this.selectedTab == tab) {
      
      if(i>0)
        this.selectedTab = this.tabs[i-1];
      else
        this.selectedTab = this.tabs[i+1];
    }
    this.tabs = this.tabs.filter(t => t != tab );




    // this.selectedTab  = tab;
    // delete this.tabs[tab.id];
  }

  ngOnChanges(changes: SimpleChanges) {
    if(changes.tabs.previousValue && !changes.tabs.previousValue.length) {
      //console.log(changes.tabs);
      this.selectedTab = this.tabs[0];
    }
  }


}
