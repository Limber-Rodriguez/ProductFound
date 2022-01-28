import { ProductserviceService } from './../../services/productservice.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public _ps: ProductserviceService) { }

  ngOnInit() {
  }
  ingresar(log){
    this._ps.login(log);
  }
}
