import { Component } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-carousel',
  standalone: true,
	imports: [NgIf, CarouselModule],
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: true
  }
  images: string[] = [];
  
  constructor() {
    this.images[0] = "../../../assets/img/home_carousel/europastry_logo.png";
    this.images[1] = "../../../assets/img/home_carousel/okin_logo.png";
    this.images[2] = "../../../assets/img/home_carousel/frida_logo.png";
  }
}
