import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-message',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './message.component.html',
})
export class MessageComponent {
  message: string;
  constructor() {
    this.message = ""

  }
}
