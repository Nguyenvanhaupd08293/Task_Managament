import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SidebarComponent } from './sidebar/sidebar.component';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import { DetailComponent } from './detail/detail.component';
@Component({
  selector: 'app-home-ass',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    SidebarComponent,
    MainComponent,
    HeaderComponent,
    DetailComponent,
  ],
  templateUrl: './home-ass.component.html',
  styleUrls: ['./home-ass.component.css']
})
export class HomeASSComponent {}
