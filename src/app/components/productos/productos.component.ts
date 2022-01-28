import { Product } from './../../models/product';
import { ProductserviceService } from './../../services/productservice.service';
import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { FormControl } from '@angular/forms';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';


var n=0;

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css'],
  
})
export class ProductosComponent implements OnInit {
  products=[];
  product = {} as Product;
  editing: boolean = false;
  editingProduct: Product;
  urlImagen: Observable<string>;
  public mostrar: Array<any>;
  mensaje = new FormControl('',[]);
  constructor(public _ps: ProductserviceService,
              private productservice: ProductserviceService,
              private storage: AngularFireStorage,
              ) { }

  ngOnInit() {
    // mostrando el array recibido desde home
    this.mostrar = this._ps.getArray();
    // localStorage.setItem("token", JSON.stringify(this.mostrar));
    // JSON.parse(localStorage.getItem("token"));
    // console.log(JSON.parse(localStorage.getItem("token")));

    this._ps.getProduct().subscribe(products => {
      this.products = products;
    });
  }
  votar(n,id,userid,haVotado){
    if(haVotado.includes(userid)) return;
      n += 1;
      var datos = haVotado;
      datos.push(userid);
      this._ps.votar(n,id,datos);
  }
  comentar(event: Event,userid,nombre,comentarios,productid){
    event.preventDefault();
    var com = {nombre: nombre, idusuario: userid,mensaje: this.mensaje.value};
    comentarios.push(com);
    this._ps.comentar(comentarios,productid);
    this.mensaje = new FormControl('',[]);
  }
    editProduct(event, product) {
    this.editing = !this.editing;
    this.editingProduct = product;
  }
  // editar
  onUpload(e){
    // console.log(e.target.result[0])
    const id = Math.random().toString(36).substring(2);
    const file = e.target.files[0];
    const filePath = `productos/product_${id}`;
    const ref = this.storage.ref(filePath);
    const task = this.storage.upload(filePath,file);
    task.snapshotChanges().pipe(finalize(()=>this.urlImagen = ref.getDownloadURL())).subscribe();
  }
  agregarProduct(url,idproduct){
    var datos = [{imgurl: url}];
    this.product = Object.assign(this.product, ...datos);  
    this.productservice.editar(this.product,idproduct);
    this.product = {} as Product;
  }
  eliminar(event, product){
    this.productservice.deleteProduct(product);
  }
}