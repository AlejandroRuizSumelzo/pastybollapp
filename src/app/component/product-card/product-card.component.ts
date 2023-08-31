import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import {
  faBoxOpen,
  faRuler,
  faSnowflake,
  faWeightHanging,
} from '@fortawesome/free-solid-svg-icons';
import { Product } from 'src/app/interface/product';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnInit {
  @Input() chosenOption: string = '';
  @Input() filteredProducts: Product[] = [];

  productData: Product[] = [];
  displayedData: Product[] = [];
  faBox = faBoxOpen;
  faWeight = faWeightHanging;
  faRuler = faRuler;
  faSnowflake = faSnowflake;

  displayBakery: boolean = false;
  displayRestoration: boolean = false;
  displayHoreca: boolean = false;
  filterDisplay: boolean = false;

  constructor(private http: HttpClient, library: FaIconLibrary) {
    library.addIcons(faBoxOpen, faWeightHanging, faRuler, faSnowflake);
  }

  ngOnInit(): void {
    if (this.chosenOption !== '') {
      this.displayBakery = this.chosenOption === 'bakery';
      this.displayRestoration = this.chosenOption === 'restoration';
      this.displayHoreca = this.chosenOption === 'horeca';
      this.loadProductData();
    } else if (this.filteredProducts.length > 0) {
      this.displayedData = this.filteredProducts;
      this.filterDisplay = true;
    }
  }

  loadProductData(): void {
    let jsonFileName = '';

    if (this.chosenOption === 'bakery') {
      jsonFileName = 'businessDescriptionBakery.json';
    } else if (this.chosenOption === 'restoration') {
      jsonFileName = 'businessDescriptionRestoration.json';
    } else if (this.chosenOption === 'horeca') {
      jsonFileName = 'businessDescriptionHoreca.json';
    }

    this.http
      .get<Product[]>(`/assets/json/business/${jsonFileName}`)
      .subscribe((data) => {
        this.productData = data;
        this.displayedData = data.slice(0, 10);
      });
  }

  showMore(): void {
    const startIndex = this.displayedData.length;
    const endIndex = startIndex + 10;

    if (startIndex < this.productData.length) {
      this.displayedData.push(...this.productData.slice(startIndex, endIndex));
    }
  }
}
