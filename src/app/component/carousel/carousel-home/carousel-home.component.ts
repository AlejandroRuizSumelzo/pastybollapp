import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  standalone: true,
  imports: [NgIf, CarouselModule],
  selector: 'app-carousel-home',
  templateUrl: './carousel-home.component.html',
  styleUrls: ['./carousel-home.component.scss'],
})
export class CarouselHomeComponent {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 200,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      740: {
        items: 1,
      },
      940: {
        items: 1,
      },
    },
    nav: false,
  };
  images: string[] = [];

  constructor() {
    this.images[0] = '/assets/img/home_carousel/home_landing_1.webp';
    this.images[1] = '/assets/img/home_carousel/home_landing_2.webp';
    this.images[2] = '/assets/img/home_carousel/home_landing_3.webp';
  }
}
