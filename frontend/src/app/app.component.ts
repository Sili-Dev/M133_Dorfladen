import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './_services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    public userService: UserService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  navigateToCart() {
    this.router.navigateByUrl('/cart')
  }
}
