import { Component } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-carousel',
  standalone: true,
	imports: [NgbCarouselModule, NgIf],
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent {
  images: string[] = [];
  
  constructor() {
    this.images[0] = "../../../assets/img/home_carousel/europastry_logo.png";
    this.images[1] = "../../../assets/img/home_carousel/okin_logo.png"; // Agrega la ruta de la imagen 1 aquí
    this.images[2] = "../../../assets/img/home_carousel/frida_logo.png"; // Agrega la ruta de la imagen 2 aquí
  }
}
