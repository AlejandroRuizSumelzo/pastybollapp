import { Component } from '@angular/core';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.scss'],
})
export class BusinessComponent {
  displayBakery: boolean = false;
  displayRestoration: boolean = false;
  displayHoreca: boolean = false;
  chosenOption: string = '';

  selectBakery(): void {
    if (this.displayBakery) {
      this.displayBakery = false;
    } else if (!this.displayBakery) {
      this.displayBakery = true;
      this.chosenOption = 'bakery';
    }
    this.displayRestoration = false;
    this.displayHoreca = false;
  }

  selectRestoration(): void {
    this.displayBakery = false;
    if (this.displayRestoration) {
      this.displayRestoration = false;
    } else if (!this.displayRestoration) {
      this.displayRestoration = true;
      this.chosenOption = 'restoration';
    }
    this.displayHoreca = false;
  }

  selectHoreca(): void {
    this.displayBakery = false;
    this.displayRestoration = false;
    if (this.displayHoreca) {
      this.displayHoreca = false;
    } else if (!this.displayHoreca) {
      this.displayHoreca = true;
      this.chosenOption = 'horeca';
    }
  }
}
