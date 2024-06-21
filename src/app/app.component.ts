
import { HeaderComponent } from "./homeASS/header/header.component";
import { Component } from '@angular/core';
import { CommonModule } from "@angular/common";
import { RouterOutlet } from '@angular/router';
import { HomeASSComponent } from "./homeASS/home-ass.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent, HomeASSComponent,CommonModule ],
     templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
}
