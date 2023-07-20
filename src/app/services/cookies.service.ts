import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CookiesService {
  private cookieChoiceKey = 'cookieChoice';

  constructor() {}

  hasUserAcceptedCookies(): boolean {
    const cookieChoice = localStorage.getItem(this.cookieChoiceKey);
    console.log("cookieChoice",cookieChoice);
    return cookieChoice === 'accept';
  }

  setUserCookieChoice(choice: 'accept' | 'reject'): void {
    console.log("choice",choice);
    localStorage.setItem(this.cookieChoiceKey, choice);
  }
}
