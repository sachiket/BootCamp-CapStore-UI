import { Component, OnInit } from '@angular/core';
import { NavServiceService } from '../_services/nav-service.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

 
  title = 'CapStore-UI';
  private roles: string[];
  isLoggedIn = false;
  showAdminBoard = false;
  showMerchantBoard = false;
  showCustomerBoard = false;
  username: string;
  name = '';

  constructor(private tokenStorageService: TokenStorageService , public nav:NavServiceService) { }

  ngOnInit() {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;
      this.name = user.username;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showMerchantBoard = this.roles.includes('ROLE_MERCHANT');
      this.showCustomerBoard = this.roles.includes('ROLE_CUSTOMER');
      this.username = user.username;
    }
  }

  logout() {
    this.tokenStorageService.signOut();
    window.location.reload();
  }

}
