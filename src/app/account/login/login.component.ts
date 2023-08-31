import { Component, OnInit } from '@angular/core';
import { AccountService } from '../shared/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit  {
  email = "admin@admin.com";
  password = "admin";
  token: any;

  constructor(private account: AccountService) {}

  ngOnInit(): void {}

  async login() {
    const credentials = {
      login: this.email,
      password: this.password,
    }
    this.account.login(credentials).subscribe();

    // const a = await this.account.list();
    // console.log(a)
  }
}
