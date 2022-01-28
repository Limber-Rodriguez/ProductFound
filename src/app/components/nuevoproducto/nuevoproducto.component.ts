import { AngularFireStorage } from '@angular/fire/storage';
import { ProductserviceService } from './../../services/productservice.service';
import { Product } from './../../models/product';
import { finalize } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-nuevoproducto',
  templateUrl: './nuevoproducto.component.html',
  styleUrls: ['./nuevoproducto.component.css']
})
export class NuevoproductoComponent implements OnInit {

  constructor(
    private productservice: ProductserviceService,
    private storage: AngularFireStorage,
    public _ps: ProductserviceService
    ){}
    product = {} as Product;
    urlImagen: Observable<string>;
  ngOnInit() {
  }
  onUpload(e){
    const id = Math.random().toString(36).substring(2);
    const file = e.target.files[0];
    const filePath = `productos/product_${id}`;
    const ref = this.storage.ref(filePath);
    const task = this.storage.upload(filePath,file);
    task.snapshotChanges().pipe(finalize(()=>this.urlImagen = ref.getDownloadURL())).subscribe();
  }
  agregarProduct(uid,url){
    var datos = [{fecha: Date.now()},{imgurl: url},{ votos: 0 }, { comentarios: [] }, {haVotado:[]},{carrito:[]},{creador: uid}];
    this.product = Object.assign(this.product, ...datos);  
    this.productservice.agregarProduct(this.product);
    this.product = {} as Product;
  }


}
