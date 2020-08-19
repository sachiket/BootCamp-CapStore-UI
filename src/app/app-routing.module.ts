import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { CartComponent } from './cart/cart.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { PlaceOrderComponent } from './place-order/place-order.component';
import { OrderpageComponent } from './orderpage/orderpage.component';
import { OrderdetailComponent } from './orderdetail/orderdetail.component';
import { ViewaddressComponent } from './viewaddress/viewaddress.component';
import { AddressComponent } from './address/address.component';
import { CancelorderComponent } from './cancelorder/cancelorder.component';
import { MerchantHomeComponent } from './merchant-home/merchant-home.component';
import { CustomerhomepageComponent } from './customerhomepage/customerhomepage.component';
import { AddproductComponent } from './merchant-home/addproduct/addproduct.component';
import { ViewproductComponent } from './merchant-home/viewproduct/viewproduct.component';
import { CustomerProfileComponent } from './customerhomepage/customer-profile/customer-profile.component';
import { EditProfileComponent } from './customerhomepage/edit-profile/edit-profile.component';
import { AddmerchantComponent } from './admin-home/addmerchant/addmerchant.component';
import { ViewmerchantComponent } from './admin-home/viewmerchant/viewmerchant.component';



const routes: Routes = [
  {path: 'auth',component: AuthComponent },
  { path: 'home', component: HomeComponent },
  { path: 'master', component: MerchantHomeComponent },
  { path: 'admin', component: AdminHomeComponent},
  {path:'retailer' , component: CustomerhomepageComponent},
  {path:'cart' , component: CartComponent},
  {path:'wishlist' , component: WishlistComponent},
  {path:'master/addproduct' , component: AddproductComponent},
  {path:'master/viewproduct' , component: ViewproductComponent},
  {path:'retailer/profile' , component: CustomerProfileComponent},
  {path:'retailer/edit' , component: EditProfileComponent},
  {path:'admin/addproductmaster' , component: AddmerchantComponent},
  {path:'admin/viewproductmaster' , component: ViewmerchantComponent},
  {path:'placeorder' , component : PlaceOrderComponent},
  {path:'order' , component: OrderpageComponent},
  {path:'orderdetail' , component: OrderdetailComponent},
  {path: 'viewaddress',component: ViewaddressComponent },
  {path: 'address',component: AddressComponent },
  {path: 'cancelorder' , component:CancelorderComponent},

  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
