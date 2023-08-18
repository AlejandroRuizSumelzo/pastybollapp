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
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
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
    this.images[0] = '/assets/img/home_carousel/europastry_logo.webp';
    this.images[1] = '/assets/img/home_carousel/okin_logo.webp';
    this.images[2] = '/assets/img/home_carousel/frida_logo.webp';
    this.images[3] = '/assets/img/home_carousel/barcos_logo.webp';
    this.images[4] = '/assets/img/home_carousel/idella_logo.webp';
  }
}
