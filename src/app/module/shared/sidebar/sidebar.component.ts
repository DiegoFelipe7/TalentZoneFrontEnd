import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
export interface menu {
  route: string,
  name: string,
  icon: string
}
@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule, MatIconModule],
  templateUrl: './sidebar.component.html',
})

export class SidebarComponent {
  showMenu = false
  menu: menu[]

  constructor() {
    this.menu = [
      {
        route: "",
        name: "Productos",
        icon: "home"
      },
      {
        route: "/cart",
        name: "Compras",
        icon: "attach_money"
      },
      {
        route: "/history",
        name: "Historial",
        icon: "history"
      },
      {
        route: "/question",
        name: "Preguntas",
        icon: "question_answer"
      }
    ]
  }
  closeMenu(): void {
    this.showMenu = false;
  }
  openMenu(): void {
    this.showMenu = true;

  }

}
