import { IAccount } from '../../../entities/interface/account';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { AccountService } from '../../../service/account.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule,FormsModule, ToastModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [MessageService],
})

export class RegisterComponent {
  registerData = { username:'',email: '', password: '' };

  constructor(private accountService: AccountService, private router: Router) {}

  registerUser(): void {
    this.accountService.register(this.registerData).subscribe(() => {
      // Đăng ký thành công, tiến hành đăng nhập và chuyển hướng
      this.accountService.login(this.registerData.email, this.registerData.password)
        .subscribe(() => {
          // Sau khi đăng nhập thành công, chuyển hướng đến trang chủ hoặc trang profile
          this.router.navigate(['/profile']); // Thay '/home' bằng route bạn muốn chuyển hướng
        });
    });
  }
}