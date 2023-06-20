import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs"
import { Iproducts } from '../interfaces/Product.interface';
import { environment } from 'src/environments/environment';
import { Iresponse } from '../interfaces/Response.interface';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private api = environment.api;
  constructor(private http: HttpClient) { }


  getProducts(): Observable<Iproducts[]> {
    return this.http.get<Iproducts[]>(`${this.api}/products`);
  }
  getProductId(id: string): Observable<Iproducts> {
    return this.http.get<Iproducts>(`${this.api}/product/${id}`);
  }
  saveProduct(product: Iproducts): Observable<Iproducts> {
    return this.http.post<Iproducts>(`${this.api}/product`, product);

  }
  updateProduct(product: Iproducts, id: string): Observable<Iproducts> {
    return this.http.put<Iproducts>(`${this.api}/product/${id}`, product);

  }

  removeProduct(id: string): Observable<Iresponse> {
    return this.http.delete<Iresponse>(`${this.api}/product/remove/${id}`)
  }


}
