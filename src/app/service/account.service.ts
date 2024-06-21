import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IAccount } from '../entities/interface/account';
import { tap } from 'rxjs/operators';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  private baseUrl = 'http://localhost:3000/account'; // Make sure the URL matches your backend

  constructor(private http: HttpClient, @Inject(PLATFORM_ID) private platformId: Object) {}

  getAccounts(): Observable<IAccount[]> {
    return this.http.get<IAccount[]>('User');
  }

  register(account: IAccount): Observable<IAccount> {
    return this.http.post<IAccount>(`${this.baseUrl}/register`, account);
  }

  loginAccount(loginData: IAccount): Observable<IAccount | null> {
    return this.http.post<IAccount | null>(`${this.baseUrl}`, loginData);
  }

  profileAccount(): Observable<IAccount> {
    return this.http.get<IAccount>('profile');
  }

  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/login`, { email, password }).pipe(
      tap((response) => {
        if (isPlatformBrowser(this.platformId)) {
          localStorage.setItem('accessToken', response.accessToken);
          localStorage.setItem('refreshToken', response.refreshToken);
          localStorage.setItem('username', response.user.username); // Assuming response contains the username
        }
      })
    );
  }

  logout(): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      localStorage.removeItem('username');
    }
  }

  isLoggedIn(): boolean {
    if (isPlatformBrowser(this.platformId)) {
      return !!localStorage.getItem('accessToken');
    }
    return false;
  }
  
  getAccessToken(): string | null {
    if (isPlatformBrowser(this.platformId)) {
      return localStorage.getItem('accessToken');
    }
    return null;
  }

  getUsername(): string | null {
    if (isPlatformBrowser(this.platformId)) {
      return localStorage.getItem('username');
    }
    return null;
  }
}
