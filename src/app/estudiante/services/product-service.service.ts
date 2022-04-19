import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../interface/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {


  constructor(private http: HttpClient) { }

  getProductsSmall() {
      return this.http.get<any>('assets/products-small.json')
      .toPromise()
      .then(res => <Product[]>res.data)
      .then(data => { return data; });
  }

}