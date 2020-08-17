import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';
import { User } from '../models/user.model';

const API_URL = 'http://localhost:9005/app/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})


export class UserService {
 

  
  constructor(private http: HttpClient) { }




  //PRODUCT MASTER ROLES

  addProduct(product:Product): Observable<any> {
    return this.http.post(API_URL + 'merchant/addProduct',product, { responseType: 'text' });
  }

  deleteProduct(productId:String): Observable<any> {
    return this.http.delete(API_URL + 'merchant/deleteProduct?productId='+productId,{ responseType: 'text' });
  }

  



  //ADMIN ROLES

  addProductMaster(user:User): Observable<any> {
    return this.http.post(API_URL + 'admin/addMerchant',user, { responseType: 'text' });
  }

  deleteProductMaster(userId:Number): Observable<any> {
    return this.http.delete(API_URL + 'admin/deleteMerchant?userId='+userId,{ responseType: 'text' });
  }

  viewAllProductMasters(): Observable<any>{
    return this.http.get(API_URL+'admin/viewAllMerchants',httpOptions);
  }



}