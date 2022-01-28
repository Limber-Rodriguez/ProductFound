import { Component } from '@angular/core';

import {ProductserviceService} from './services/productservice.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'publicacion';
  constructor(public _ps: ProductserviceService){}
}
