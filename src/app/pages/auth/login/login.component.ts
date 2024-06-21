import { Component, OnInit } from '@angular/core';
import {
  ReactiveFormsModule,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ToastModule } from 'primeng/toast';
import { IAccount } from '../../../entities/interface/account';
import { AccountService } from '../../../service/account.service';
import { MessageService } from 'primeng/api';
import { CookieService } from 'ngx-cookie-service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, ToastModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  providers: [MessageService],
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(
    private messageService: MessageService,
    private accountService: AccountService,
    private router: Router,
    private cookieService: CookieService
  ) {}

   login(): void {
    this.accountService.login(this.email, this.password).subscribe(
      () => {
        // Đăng nhập thành công, chuyển hướng đến trang khác
        this.router.navigate(['/profile']);
      },
      (error) => {
        alert('dang nhap khong dung');
      }
    );
  }
}