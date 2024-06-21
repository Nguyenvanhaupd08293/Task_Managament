
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Router } from '@angular/router';
import { AccountService } from '../../service/account.service';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,RouterLink,FontAwesomeModule,],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private accountService: AccountService, private router: Router) {}
  username: string | null = null;
  ngOnInit(): void {
    if (this.accountService.isLoggedIn()) {
      this.username = this.accountService.getUsername();
    }
  }
  isLoggedIn(): boolean {
    return this.accountService.isLoggedIn();
  }

  logout(): void {
    this.accountService.logout();
    this.router.navigate(['/']);
  }
}