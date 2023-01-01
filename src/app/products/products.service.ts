import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Products } from './products';

@Injectable({

  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }
  
  get(){
    return this.http.get<Products[]>(`http://localhost:3333/api/products`)
  }
}



 
