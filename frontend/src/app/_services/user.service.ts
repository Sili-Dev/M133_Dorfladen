import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CartProduct } from '../_models/cart-product';
import { Product } from '../_models/product';
import { User } from '../_models/user';
import { ProductService } from '../_services/product.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: User;
  cartPrice: number = 0;
  cart: CartProduct[] = [];

  constructor(
    private http: HttpClient,
    private productService: ProductService,
  ) {
    this.getCurrentUser().then((data) => {
      data.subscribe(async (data) => {
        this.user = data;
        await this.calcCartPrice();
      });
    });
  }

  async login(email: string, firstname: string, lastname: string) {
    await this.http.get(`http://localhost:8080/user/${email}/${firstname}/${lastname}`).subscribe();
    this.getCurrentUser().then((data) => {
      data.subscribe(async (data) => {
        this.user = data;
        await this.calcCartPrice();
      });
    });
  }

  async addToCart(id: number, quantity: number) {
    for (let i = 0; i < quantity; i++) this.user.cart.push(id);
    await this.http.put('http://localhost:8080/user', JSON.stringify(this.user)).subscribe();
    await this.calcCartPrice();
  }

  async removeFromCart(id: number) {
    this.user.cart.splice(this.user.cart.indexOf(id), 1);
    await this.http.put('http://localhost:8080/user', JSON.stringify(this.user)).subscribe();
    await this.calcCartPrice();
  }

  async getCurrentUser() {
    return await this.http.get<User>('http://localhost:8080/user');
  }

  async calcCartPrice() {
    this.cartPrice = 0;
    this.cart = [];
    let alreadyCalc = [];
    for (let id of this.user.cart) {
      if (alreadyCalc.indexOf(id) == -1) {
        alreadyCalc.push(id);
        const quantity = this.calculateQuantity(id);
        await this.productService.getProductBy(id).then((data) => {
          data.subscribe((product) => {
            const cartProduct: CartProduct = {
              productid: product.id,
              productPrice: product.sale,
              productname: product.name,
              quantity: quantity,
              totalPrice: Math.round(quantity * product.sale * 100) / 100,
            }
            this.cart.push(cartProduct);
            this.cartPrice += cartProduct.totalPrice;
          });
        });
      }
    }
  }

  private calculateQuantity(productid: number): number {
    let quantity = 0;
    for (let id of this.user.cart) {
      if (id === productid) quantity++;
    }
    return quantity;
  }
}
