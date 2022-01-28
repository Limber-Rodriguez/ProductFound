import { Component, OnInit } from '@angular/core';
import { ProductserviceService } from './../../services/productservice.service';
@Component({
  selector: 'app-misproductos',
  templateUrl: './misproductos.component.html',
  styleUrls: ['./misproductos.component.css']
})
export class MisproductosComponent implements OnInit {

  products=[];

  constructor(public productService: ProductserviceService) { 
  }

  ngOnInit() {
    this.productService.getOrderProduct().subscribe(products => {
      this.products = products;
    });
    
  }
  carrito(v){
    console.log(v);
  }
  enviar(dato){
    this.productService.setArray(dato.id);
  }
}