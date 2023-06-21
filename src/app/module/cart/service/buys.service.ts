import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Ibuy } from '../interfaces/buy.interface';

@Injectable({
  providedIn: 'root'
})
export class BuysService {
  private api = environment.api;
  constructor(private http: HttpClient) { }


  saveBuys(buy: Ibuy): Observable<Ibuy> {
    return this.http.post<Ibuy>(`${this.api}/buys`, buy)
  }
}
