import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Ibuy } from '../interfaces/buy.interface';
import { Ihistory } from '../../products/interfaces/History.interface';

@Injectable({
  providedIn: 'root'
})
export class BuysService {
  private api = environment.api;
  constructor(private http: HttpClient) { }


  saveBuys(buy: Ibuy): Observable<Ibuy> {
    return this.http.post<Ibuy>(`${this.api}/buys`, buy)
  }
  getHistory(): Observable<Ihistory[]> {
    return this.http.get<Ihistory[]>(`${this.api}/buys/history`);
  }

  getHistoryUser(id: string): Observable<Ihistory[]> {
    return this.http.get<Ihistory[]>(`${this.api}/buys/history/${id}`);

  }
}
