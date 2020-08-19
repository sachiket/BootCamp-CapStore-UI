import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { FormsModule } from '@angular/forms';
import { CartComponent } from './cart/cart.component';
import { AddToCartServiceService } from './_services/add-to-cart-service.service';
import {HttpClientModule } from '@angular/common/http';
import { IndianCurrency } from './cart/indianCurrency.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatGridListModule} from '@angular/material/grid-list';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { WishlistComponent } from './wishlist/wishlist.component';
import { ToastrModule } from 'ngx-toastr';
import { PlaceOrderComponent } from './place-order/place-order.component';
import { OrderpageComponent } from './orderpage/orderpage.component';
import { OrderdetailComponent } from './orderdetail/orderdetail.component';
import { AddressComponent } from './address/address.component';
import { ViewaddressComponent } from './viewaddress/viewaddress.component';
import { CancelorderComponent } from './cancelorder/cancelorder.component';
import { CustomerhomepageComponent } from './customerhomepage/customerhomepage.component';
import { EditProfileComponent } from './customerhomepage/edit-profile/edit-profile.component';
import { CustomerProfileComponent } from './customerhomepage/customer-profile/customer-profile.component';
import { AddmerchantComponent } from './admin-home/addmerchant/addmerchant.component';
import { ViewmerchantComponent } from './admin-home/viewmerchant/viewmerchant.component';
import { MerchantHomeComponent } from './merchant-home/merchant-home.component';




@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    CartComponent,
    IndianCurrency,
    NavBarComponent,
    HomeComponent,
    AdminHomeComponent,
    WishlistComponent,
    PlaceOrderComponent,
    OrderpageComponent,
    OrderdetailComponent,
    AddressComponent,
    ViewaddressComponent,
    CancelorderComponent,
    CustomerhomepageComponent,
    EditProfileComponent,
    CustomerProfileComponent,
    AddmerchantComponent,
    ViewmerchantComponent,
    MerchantHomeComponent
  
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatGridListModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [AddToCartServiceService , authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
