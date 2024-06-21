import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../../service/account.service';
@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  constructor(private accountService: AccountService, private router: Router) {}
  username: string | null = null;
  ngOnInit(): void {
    if (this.accountService.isLoggedIn()) {
      this.username = this.accountService.getUsername();
    }
  }
}
