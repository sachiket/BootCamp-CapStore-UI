import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { NavServiceService } from '../_services/nav-service.service';
import { Router } from '@angular/router';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-merchant-home',
  templateUrl: './merchant-home.component.html',
  styleUrls: ['./merchant-home.component.css']
})
export class MerchantHomeComponent implements OnInit {

  content = '';
  private roles: string[];
  isLoggedIn = false;
  retailerName = '';
  constructor(private router: Router ,private userService: UserService ,  public nav:NavServiceService  , private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
    this.nav.show();
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    if (!this.isLoggedIn) {
      this.router.navigate(["/home"]);
    }
    
    else{
      const user = this.tokenStorageService.getUser();
      this.retailerName=user.username;
      this.roles = user.roles;
      if(!this.roles.includes('ROLE_MERCHANT')){
        this.router.navigate(["/home"]);
      }
    }
    // this.userService.getProductMasterBoard().subscribe(
    //   data => {
    //     this.content = data;
    //   },
    //   err => {
    //     this.content = JSON.parse(err.error).message;
    //   }
    // );
  }

  logout() {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
}
