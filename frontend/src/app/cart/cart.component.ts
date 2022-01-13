import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartProduct } from '../_models/cart-product';
import { Product } from '../_models/product';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  totalPrice: number = 0;

  constructor(
    public userService: UserService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.userService.getCurrentUser().then((data) => {
      data.subscribe(async (data) => {
        this.calculateTotal();
      });
    });
  }

  calcQuantity(numberCalc: number, id: number) {
    if (numberCalc > 0) {
      this.userService.addToCart(id, numberCalc);
    } else if (numberCalc < 0) {
      this.userService.removeFromCart(id);
    }
    this.calculateTotal();
  }

  async calculateTotal() {
    this.totalPrice = 0;
    this.userService.cart.forEach((productCart) => {
      this.totalPrice += productCart.totalPrice;
    });
  }

  goToLogin() {
    this.router.navigateByUrl('login');
  }

}
