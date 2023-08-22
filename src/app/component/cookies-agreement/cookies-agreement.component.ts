import { Component, OnInit } from '@angular/core';
import { CookiesService } from 'src/app/services/cookies.service';

@Component({
  selector: 'app-cookies-agreement',
  templateUrl: './cookies-agreement.component.html',
  styleUrls: ['./cookies-agreement.component.scss'],
})
export class CookiesAgreementComponent implements OnInit {
  showCookieModal: boolean = true;

  constructor(private cookieService: CookiesService) {}

  ngOnInit(): void {
    this.showCookieModal = !this.cookieService.hasUserAcceptedCookies();
  }

  acceptCookies() {
    this.cookieService.setUserCookieChoice('accept');
    this.showCookieModal = false;
  }

  rejectCookies() {
    this.cookieService.setUserCookieChoice('reject');
    this.showCookieModal = false;
  }
}
