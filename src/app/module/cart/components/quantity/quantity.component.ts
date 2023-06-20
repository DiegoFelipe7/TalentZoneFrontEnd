import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-quantity',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quantity.component.html',
  styleUrls: ['./quantity.component.css']
})
export class QuantityComponent {


  validateInputs(field: string, type: string) {
    return this.frmCart.controls?.[field].errors && this.frmCart.controls?.[field].touched && this.frmCart.get(field)?.hasError(type);
  }
}
