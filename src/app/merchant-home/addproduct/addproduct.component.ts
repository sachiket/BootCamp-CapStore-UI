import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/_services/user.service';
import { Product } from 'src/app/models/product.model';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import { NotificationService } from 'src/app/_services/notification.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  product:Product;
  constructor(private notificationService:NotificationService,private userService:UserService, private router: Router, private tokenStorageService: TokenStorageService) { }
  private roles: string[];
  isLoggedIn = false;

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    if (!this.isLoggedIn) {
      this.router.navigate(["/auth"]);
    }
    else{
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;
      if(!this.roles.includes('ROLE_MERCHANT')){
        this.router.navigate(["/home"]);
      }
    }
  }

  onAddProduct(form:NgForm){
    var message = '';
    this.product = new Product();
    this.product.productName = form.value.productName;
    this.product.colour = form.value.colour;
    this.product.dimension = form.value.dimension;
    this.product.specification = form.value.specification;
    this.product.manufacture = form.value.manufacture;
    this.product.quantity = form.value.quantity;
    this.product.productCategory = form.value.productCategory;
    this.product.productURL = form.value.productURL;
    this.product.price = form.value.price;
    console.log(this.product);
    let add = this.userService.addProduct(this.product);
    add.subscribe(
      
      data=>{
        message=data
        this.notificationService.showSuccess("Successfully!!","Product added")
      },
      err=>{
        this.notificationService.showError("Please try again!!","Fail to add product");
      }
      
      );

    this.router.navigate(["/master"]);

  }


}
