import { Component, OnInit } from '@angular/core';
import { ProductserviceService } from './../../services/productservice.service';
@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
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
  quitar(datos,creador,id){
      for(let i = 0 ; i<datos.length;i++){
        if(datos[i].id.includes(id) && datos[i].uid.includes(creador)){
          datos.splice(i,1);
        };
      }
      this.productService.quitar(datos,id);
  }
}
