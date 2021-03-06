import { Component, OnInit } from '@angular/core';
import { OrderService } from '../_services/order.service';
import { TokenStorageService } from '../_services/token-storage.service';
import { Router } from '@angular/router';
import { NavServiceService } from '../_services/nav-service.service';
import { NotificationService } from '../_services/notification.service';
import { CancelorderService } from '../_services/cancelorder.service';

@Component({
  selector: 'app-orderpage',
  templateUrl: './orderpage.component.html',
  styleUrls: ['./orderpage.component.css']
})
export class OrderpageComponent implements OnInit {


  private roles: string[];
  isLoggedIn = false;
  private userId = '';
  orders:any;
  constructor(private cancelService:CancelorderService, private orderService:OrderService ,private notificationService:NotificationService, public nav:NavServiceService ,private router: Router , private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {

    this.nav.show();
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (!this.isLoggedIn) {
      this.router.navigate(["/auth"]);
    }
    else{
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;
      this.userId = user.id;
      if(!this.roles.includes('ROLE_CUSTOMER')){
        this.router.navigate(["/home"]);
      }
    }
    let list = this.orderService.getAllOrders(this.userId);
    list.subscribe((data) => this.orders=data);
  }
  

  details(index){
    var orderId = this.orders[index].orderId;
    this.router.navigate(['/orderdetail'],{queryParams: {orderId:orderId}});
  }

  cancelOrder(index){
    var message;
    var orderId = this.orders[index].orderId;
    let cancel = this.cancelService.cancelOrder(orderId,this.userId);
    cancel.subscribe(
        data=>{
          message=data;
          this.notificationService.showSuccess("Refund initiated!!","Order canceled successfully");
          this.reloadPage();
        },
        err=>{
          this.notificationService.showError("Please try again!!","Fail to cancel order");
        }
    );
  }

  reloadPage() {
    window.location.reload();
  }

}
