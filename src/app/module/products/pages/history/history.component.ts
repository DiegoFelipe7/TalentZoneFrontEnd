import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { Ihistory } from '../../interfaces/History.interface';
import { ProductsService } from '../../services/products.service';
import { ProductHistoryComponent } from '../../components/product-history/product-history.component';
import { Iproduct } from 'src/app/module/cart/interfaces/buy.interface';
import { SearchComponent } from '../../components/search/search.component';
import { BuysService } from 'src/app/module/cart/service/buys.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-history',
  standalone: true,
  imports: [CommonModule, SearchComponent, MatIconModule, MatDialogModule],
  templateUrl: './history.component.html',
})
export class HistoryComponent implements OnInit {
  history: Ihistory[]
  historySearch: Ihistory[];
  constructor(private buyHistory: BuysService, public dialog: MatDialog,) {
    this.history = []
    this.historySearch = []
  }
  ngOnInit(): void {
    this.buyHistory.getHistory().subscribe({
      next: (ele) => {
        this.history = ele;
      }
    })
  }

  openHistory(products: Iproduct[]) {
    this.dialog.open(ProductHistoryComponent, {
      width: "400px",
      data: {
        products: products
      }
    });

  }

  handleSearchResult(event: Ihistory[]) {
    this.historySearch = event;
  }

}
