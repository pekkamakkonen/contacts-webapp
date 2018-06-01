import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  storageKey: string;

  constructor() {
    this.storageKey = 'cw-token';
  }

  setToken(token: any): void {
    sessionStorage.setItem(this.storageKey, JSON.stringify(token));
  }

  getToken(): string {
    const storedToken = sessionStorage.getItem(this.storageKey);
    if (!storedToken) {
      return null;
    }
    const token = JSON.parse(storedToken);
    return token.access_token;
  }

  clearToken(): void {
    sessionStorage.removeItem(this.storageKey);
  }

}
