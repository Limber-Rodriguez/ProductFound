import { ProductserviceService } from './../../services/productservice.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products=[];
  constructor(public productService: ProductserviceService) { 
  }

  ngOnInit() {
    this.productService.getProduct().subscribe(products => {
      this.products = products;
    });
  }
  carrito(uid,id,carrito,creador){
    
    for(let i = 0 ; i<carrito.length;i++){
      if(carrito[i].id.includes(id) && carrito[i].uid.includes(uid) && creador == uid) return;
    }
    var datos = {id, uid};
    var agregar = carrito;
    agregar.push(datos);
    this.productService.carrito(agregar,id);
  }
  enviar(dato){
    this.productService.setArray(dato.id);
  }
  buscar( termino:string){
 
  }
}
