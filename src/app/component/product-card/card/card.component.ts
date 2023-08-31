import { Component, Input } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import {
  faBoxOpen,
  faRuler,
  faSnowflake,
  faWeightHanging,
} from '@fortawesome/free-solid-svg-icons';
import { Product } from 'src/app/interface/product';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() displayedData: Product[] = [];

  faBox = faBoxOpen;
  faWeight = faWeightHanging;
  faRuler = faRuler;
  faSnowflake = faSnowflake;

  constructor(library: FaIconLibrary) {
    library.addIcons(faBoxOpen, faWeightHanging, faRuler, faSnowflake);
  }
}
