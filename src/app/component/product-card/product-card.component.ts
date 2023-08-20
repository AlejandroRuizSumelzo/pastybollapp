import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnInit {
  @Input() chosenOption: string = '';

  displayBakery: boolean = false;
  displayRestoration: boolean = false;
  displayHoreca: boolean = false;

  imagesBakery: string[] = [
    '/assets/img/products/croissant_1.webp',
    '/assets/img/products/pan_1.webp',
    '/assets/img/products/croissant_1.webp',
    '/assets/img/products/pan_1.webp',
    '/assets/img/products/croissant_1.webp',
    '/assets/img/products/pan_1.webp',
    '/assets/img/products/croissant_1.webp',
    '/assets/img/products/pan_1.webp',
    '/assets/img/products/croissant_1.webp',
    '/assets/img/products/pan_1.webp',
  ];

  imagesRestoration: string[] = [
    '/assets/img/products/croissant_1.webp',
    '/assets/img/products/pan_1.webp',
    '/assets/img/products/croissant_1.webp',
    '/assets/img/products/croissant_1.webp',
    '/assets/img/products/croissant_1.webp',
    '/assets/img/products/croissant_1.webp',
    '/assets/img/products/croissant_1.webp',
    '/assets/img/products/croissant_1.webp',
    '/assets/img/products/croissant_1.webp',
    '/assets/img/products/pan_1.webp',
  ];

  imagesHoreca: string[] = [
    '/assets/img/products/croissant_1.webp',
    '/assets/img/products/pan_1.webp',
    '/assets/img/products/pan_1.webp',
    '/assets/img/products/pan_1.webp',
    '/assets/img/products/pan_1.webp',
    '/assets/img/products/pan_1.webp',
    '/assets/img/products/pan_1.webp',
    '/assets/img/products/pan_1.webp',
    '/assets/img/products/croissant_1.webp',
    '/assets/img/products/pan_1.webp',
  ];

  ngOnInit(): void {
    if (this.chosenOption === 'bakery') {
      this.displayBakery = true;
      this.displayRestoration = false;
      this.displayHoreca = false;
    } else if (this.chosenOption === 'restoration') {
      this.displayBakery = false;
      this.displayRestoration = true;
      this.displayHoreca = false;
    } else if (this.chosenOption === 'horeca') {
      this.displayBakery = false;
      this.displayRestoration = false;
      this.displayHoreca = true;
    }
  }
}
