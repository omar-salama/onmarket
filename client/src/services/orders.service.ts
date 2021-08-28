import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private http: HttpClient) { }

  private url = 'http://localhost:3000/order/'

  getAllOrders() {
    return this.http.get(this.url)
  }
}
