import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../_models/user';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: User;

  constructor(
    private userService: UserService,
    private router: Router,
  ) {
    this.userService.getCurrentUser().then((data) => {
      data.subscribe((user) => {
        this.user = user;
      });
    });
  }

  ngOnInit(): void {
  }

  async login() {
    if (this.user.email.trim().length != 0 && this.user.firstname.trim().length != 0 && this.user.lastname.trim().length != 0) {
      await this.userService.login(this.user.email, this.user.firstname, this.user.lastname);
      this.router.navigateByUrl('cart');
    }
  }

}
