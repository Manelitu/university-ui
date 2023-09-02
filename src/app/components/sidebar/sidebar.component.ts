import { Component, OnInit } from '@angular/core';
import { AuthTokenService } from '../../account/shared/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  constructor(private auth: AuthTokenService) {}
  public isCoordinator: boolean = false;
  public isAdmin: boolean = false;
  public isUser: boolean = false;

  ngOnInit(): void {
    this.isCoordinator = this.auth.isCoordinator();
    this.isAdmin = this.auth.isAdmin();
    this.isUser = this.auth.isUser();
  }
}
