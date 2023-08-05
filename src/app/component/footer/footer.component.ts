import { Component } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons';
import {
  faMapLocationDot,
  faPhoneVolume,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
  mail: string = 'pastyboll@pastyboll.es';
  faWhatsapp = faWhatsapp;
  faInstagram = faInstagram;
  faMaps = faMapLocationDot;
  faPhone = faPhoneVolume;
  faMail = faEnvelope;

  constructor(library: FaIconLibrary) {
    library.addIcons(
      faWhatsapp,
      faInstagram,
      faMapLocationDot,
      faPhoneVolume,
      faEnvelope
    );
  }
}
