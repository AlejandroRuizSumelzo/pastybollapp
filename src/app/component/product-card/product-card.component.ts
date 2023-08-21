import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faBoxOpen, faRuler, faTemperatureHalf, faWeightHanging } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnInit {
  @Input() chosenOption: string = '';
  productData: any[] = [];
  faBox = faBoxOpen;
  faWeight = faWeightHanging;
  faTemperature = faTemperatureHalf;
  faRuler = faRuler;

  displayBakery: boolean = false;
  displayRestoration: boolean = false;
  displayHoreca: boolean = false;

  constructor(private http: HttpClient, library: FaIconLibrary) {
    library.addIcons(
      faBoxOpen,
      faWeightHanging,
      faTemperatureHalf,
      faRuler
    );
  }

  ngOnInit(): void {
    this.displayBakery = this.chosenOption === 'bakery';
    this.displayRestoration = this.chosenOption === 'restoration';
    this.displayHoreca = this.chosenOption === 'horeca';
    this.loadProductData();
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

    this.http.get<any[]>(`/assets/json/business/${jsonFileName}`).subscribe((data) => {
      console.log("data",data);
      this.productData = data;
    });
  }
}
