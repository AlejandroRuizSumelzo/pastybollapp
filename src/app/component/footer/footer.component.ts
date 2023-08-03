import { Component } from '@angular/core';
import {
  FaIconLibrary,
} from '@fortawesome/angular-fontawesome';
import { faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  constructor(library: FaIconLibrary) {
    library.addIcons(
      faWhatsapp,
      faInstagram
    );
  }
}
