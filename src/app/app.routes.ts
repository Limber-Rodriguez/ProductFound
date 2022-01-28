import { MisproductosComponent } from './components/misproductos/misproductos.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { LoginComponent } from './components/login/login.component';
import { CuetaComponent  } from './components/cueta/cueta.component'
import { ProductosComponent } from './components/productos/productos.component';
import { NuevoproductoComponent } from './components/nuevoproducto/nuevoproducto.component';
import { PopularComponent } from './components/popular/popular.component';
import { HomeComponent } from './components/home/home.component';
import { RouterModule, Routes } from '@angular/router';

const app_routes: Routes =[
    { path: 'login', component: LoginComponent},
    { path: 'cuenta', component: CuetaComponent},
    { path: 'productos', component: ProductosComponent},
    { path: 'home', component: HomeComponent},
    { path: 'populares', component: PopularComponent},
    { path: 'nuevoproducto', component: NuevoproductoComponent},
    { path: 'carrito', component: CarritoComponent},
    { path: 'misproductos', component: MisproductosComponent},
    { path: '**', pathMatch:'full', redirectTo: 'home' }
];
export const app_routing = RouterModule.forRoot(app_routes);