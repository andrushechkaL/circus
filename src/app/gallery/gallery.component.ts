import {Component, Input, OnInit} from '@angular/core';
import {Image} from "../Image";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  @Input() img : Image[] = [];

  constructor() { }

  ngOnInit() {
  }

}
