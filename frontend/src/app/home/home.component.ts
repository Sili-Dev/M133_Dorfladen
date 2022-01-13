import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../_models/product';
import { ProductService } from '../_services/product.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  products: Product[] = [];

  constructor(
    private productService: ProductService,
    private userService: UserService,
    private router: Router,
  ) { }

  async ngOnInit() {
    const response = await this.productService.getAllProducts();
    response.subscribe((data) => {
      this.products = data;
    });
  }

  openProduct(id: number) {
    this.router.navigate(['product', id]);
  }

  async addToCart(id: number) {
    await this.userService.addToCart(id, 1);
  }

}
