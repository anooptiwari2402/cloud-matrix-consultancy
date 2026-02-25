import { Component } from '@angular/core';
import { HeaderComponent } from './header.component';
import { MainBodyComponent } from './main-body.component';
import { FooterComponent } from './footer.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, MainBodyComponent, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
