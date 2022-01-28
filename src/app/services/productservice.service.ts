import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import {Router} from '@angular/router';
import { Product } from './../models/product';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {
  productsCollection: AngularFirestoreCollection;
  products: Observable<Product[]>
  orden: Observable<Product[]>
  ordenarCollection: AngularFirestoreCollection;
  productDoc: AngularFirestoreDocument<Product>;

  public usuario: any = {};
  // para mostrar lo que estoy enviando del home
  public mostrar: Array<any>;
  public ver: Array<any>;
  constructor(
    public db: AngularFirestore,
    public afAuth: AngularFireAuth,
    private router: Router
  ) {
    this.afAuth.authState.subscribe( user =>{
      //console.log('estado :', user);
      if( !user ){
        return;
      }
      this.usuario.email = user.email;
      this.usuario.nombre = user.displayName;
      this.usuario.uid = user.uid;
      this.usuario.imagen= user.photoURL;
    })
    this.productsCollection = this.db.collection('products');

    this.products = this.productsCollection.snapshotChanges().pipe(map(actions =>{
      return actions.map(a=>{
        const data = a.payload.doc.data() as Product;
        data.id = a.payload.doc.id;
        return data
      });
    }));
    
// ordenar
    this.ordenarCollection = db.collection<Product>('products',ref => ref.orderBy('votos','desc'));
    this.orden = this.ordenarCollection.snapshotChanges().pipe(map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Product;
        const id = a.payload.doc.id;
        return { id, ...data };
      });
    }));
  }
  login(log) {
    if(log=='google'){
      this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
      this.router.navigate(['/home']);
    }else{
      this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
      this.router.navigate(['/home']);
    }
  
  }
  logout() {
    this.usuario = {};
    this.afAuth.auth.signOut();
    this.router.navigate(['/home']);
  }
  agregarProduct(product: any){
     this.productsCollection.add(product);
  }
  getProduct(){
    return this.products;
  }
  getOrderProduct(){
    return this.orden;
  }
  // array desde el home
  setArray(array: any){
    this.mostrar = array;
  }
  getArray(){
    return this.mostrar;
  }
  votar(n,id,haVotado){
    this.productsCollection.doc(id).update({
      votos: n,
      haVotado:haVotado
    })
  }
  comentar(comentarios,id){
    this.productsCollection.doc(id).update({
      comentarios: comentarios
    })
  } 
  carrito(carro,id){
    this.productsCollection.doc(id).update({
      carrito: carro
    })
  }
  editar(product:any,id){
    this.productsCollection.doc(id).update(product);
  }
  deleteProduct(product: Product) {
    this.productDoc = this.db.doc(`products/${product.id}`);
    this.productDoc.delete();
    this.router.navigate(['/home']);
  }
  quitar(carro,id){
    this.productsCollection.doc(id).update({
      carrito: carro
    })
  }
}
