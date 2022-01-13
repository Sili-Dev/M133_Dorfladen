import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../_models/product';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  async getAllProducts() {
    return this.http.get<Product[]>('http://localhost:8080/products');
  }

  async getProductBy(id: number) {
    return this.http.get<Product>('http://localhost:8080/products/' + id);
  }
}
