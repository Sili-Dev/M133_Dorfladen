import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Product } from '../_models/product';
import { User } from '../_models/user';
import { ProductService } from '../_services/product.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  productid: number;
  product: Product;
  numberOfProducts: number = 1;

  constructor(
    private productService: ProductService,
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router,
  ) {
    this.productid = Number.parseInt(this.route.snapshot.paramMap.get("id"));
  }

  async ngOnInit() {
    const response = await this.productService.getProductBy(this.productid);
    response.subscribe((data) => {
      this.product = data;
    });
  }

  addToCart() {
    if (this.numberOfProducts > 0) {
      this.userService.addToCart(this.product.id, this.numberOfProducts);
    }
    this.numberOfProducts = 1;
  }

  calculateQuantity(summand: number) {
    if (this.numberOfProducts - summand > 0) {
      this.numberOfProducts -= summand;
    }
  }

  addToCartAndNavigate() {
    if (this.numberOfProducts > 0) {
      this.userService.addToCart(this.product.id, this.numberOfProducts);
    }
    this.numberOfProducts = 1;
    this.router.navigateByUrl('cart');
  }

}
