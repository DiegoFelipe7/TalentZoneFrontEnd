import { AfterViewInit, Component, ElementRef, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { Observable, debounceTime, distinct, filter, fromEvent, map, switchMap, tap } from 'rxjs';
import { Ihistory } from '../../interfaces/History.interface';
import { BuysService } from 'src/app/module/cart/service/buys.service';
@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './search.component.html',
})
export class SearchComponent implements AfterViewInit {
  @Output() historySearchResult = new EventEmitter<Ihistory[]>();

  // @Input() historySearch$!: Observable<Ihistory[]>;
  @ViewChild("search") search!: ElementRef
  constructor(private buyService: BuysService) {

  }


  ngAfterViewInit(): void {
    fromEvent<Event>(this.search.nativeElement, "keyup").pipe(
      map((events: Event) => {
        let data = (events.target as HTMLInputElement).value;
        return data
      }),
      filter((ele: string) => ele.length > 2),
      debounceTime(500),
      distinct(),
      switchMap((trm: string) => this.buyService.getHistoryUser(trm))
    ).subscribe((result: Ihistory[]) => {
      this.historySearchResult.emit(result);
    });
  }
}
