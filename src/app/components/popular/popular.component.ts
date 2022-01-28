import { Component, OnInit } from '@angular/core';
import { ProductserviceService } from './../../services/productservice.service';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css']
})
export class PopularComponent implements OnInit {
  products=[];
  constructor(public productService: ProductserviceService) { }

  ngOnInit() {
    this.productService.getOrderProduct().subscribe(products => {
      this.products = products;
    });
  }
  enviar(dato){
    this.productService.setArray(dato.id);
  }
}
