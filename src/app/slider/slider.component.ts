import { Component, OnInit } from '@angular/core';
import { Slider } from '../slider'

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  sliders: Slider[] = [
    {id: 0, img: "./assets/image/slide1.jpg"},
    {id: 1, img: "./assets/image/slide2.jpg"},
    {id: 2, img: "./assets/image/slide3.jpg"}
  ];


  selectedSlider: Slider = this.sliders[0];

  constructor() { }

  ngOnInit() {
  }

  right(slide: Slider): void {
    let i = this.sliders.findIndex(t => t == slide);
    //if(this.selectedSlider == slide) {
    if (i <= 2) {
    this.selectedSlider = this.sliders[i + 1];
  }
    //}
  }

  left(slide: Slider): void {
    let i = this.sliders.findIndex(t=> t ==slide);
    //if(this.selectedSlider == slide) {
    if (i >= 0) {
      this.selectedSlider = this.sliders[i - 1];
    }
    //}
  }

}
