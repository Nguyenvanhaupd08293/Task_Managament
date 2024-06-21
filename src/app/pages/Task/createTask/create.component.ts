import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../../../homeASS/header/header.component';
@Component({
  selector: 'app-create',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent ],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {

}
