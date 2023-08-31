import { Component } from '@angular/core';
import { AccountService } from '../../account/shared/account.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent {
  constructor(private auth: AccountService) {}  

  logout(): void {
    this.auth.logout();
  }
}
