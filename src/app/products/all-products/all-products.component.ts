import { Component, OnInit } from '@angular/core';
import { Products } from '../products';
import { ProductsService } from '../products.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'angular-nest-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css'],
})
export class AllProductsComponent implements OnInit {

  constructor(private productsService: ProductsService,private router: Router) {}
 
  products: Products[] = [];
 
  ngOnInit(): void {
    if(this.isLoggedIn==false){
      this.router.navigate(['/login']);
    }
    

    this.getAll();
  }

  get isLoggedIn(): boolean {
    const authToken = localStorage.getItem('token');
    return authToken !== null ? true : false;
  }

  getAll(){
    this.productsService.get().subscribe((data) => {
      this.products = data;
    });
  }

  onLogout(){
    localStorage.removeItem('token');
    localStorage.clear();
    this.router.navigate(['/login']);
  }

}
