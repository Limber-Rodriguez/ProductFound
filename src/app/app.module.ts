import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductserviceService} from './services/productservice.service';
// firebase
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {AngularFireAuthModule} from '@angular/fire/auth';

import { HomeComponent } from './components/home/home.component';
import { ProductosComponent } from './components/productos/productos.component';
import { NuevoproductoComponent } from './components/nuevoproducto/nuevoproducto.component';
import { PopularComponent } from './components/popular/popular.component';
import { CuetaComponent } from './components/cueta/cueta.component';
import { LoginComponent } from './components/login/login.component';

//rutas
import {app_routing} from './app.routes';
import { CarritoComponent } from './components/carrito/carrito.component';
import { MisproductosComponent } from './components/misproductos/misproductos.component';

import {FechaPipe} from './pipes/fecha.pipe';
import { FilterPipe} from './pipes/filtro.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductosComponent,
    NuevoproductoComponent,
    PopularComponent,
    CuetaComponent,
    LoginComponent,
    CarritoComponent,
    MisproductosComponent,
    FechaPipe,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    app_routing,
    FormsModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    ReactiveFormsModule
  ],
  providers: [
    ProductserviceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
