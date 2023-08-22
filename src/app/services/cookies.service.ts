import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CookiesService {
  private cookieChoiceKey = 'cookieChoice';

  constructor() {}

  hasUserAcceptedCookies(): boolean {
    const cookieChoice = localStorage.getItem(this.cookieChoiceKey);
    return cookieChoice === 'accept';
  }

  setUserCookieChoice(choice: 'accept' | 'reject'): void {
    localStorage.setItem(this.cookieChoiceKey, choice);
  }
}
