import {Component, Input, OnInit} from '@angular/core';
import { Tab } from '../tab';

@Component({
  selector: 'tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit {

  @Input() tabs: Tab;

  constructor() { }

  ngOnInit() {
  }




}
