import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './module/shared/header/header.component';
import { SidebarComponent } from './module/shared/sidebar/sidebar.component';
import { ProductsComponent } from './module/products/pages/products/products.component';
import { HistoryComponent } from './module/products/pages/history/history.component';
import { CartComponent } from './module/cart/pages/cart/cart.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, SidebarComponent, ProductsComponent, HistoryComponent, CartComponent]
})
export class AppComponent {
  title = 'TalentZoneFrontEnd';
}
