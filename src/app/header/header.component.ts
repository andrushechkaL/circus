import {Component, Input, OnInit} from '@angular/core';
import {Menu} from "../menu";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() Menu: Menu[]=[];

  constructor() { }

  ngOnInit() {
  }

}
