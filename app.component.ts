import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
  ngOnDestroy (){
    export class AppComponent implements OnInit, ngOnDestroy {
  title = 'LH Games';
  mostrarMenu: boolean = true;
  private _loginService: any;

  constructor(private_loginService: LoginService){}

  ngOnInit(): void {
   this._loginService.getMostrarMenu().subscribe()
   res => {this.mostrarMenu = res;}
  }

  ngOnDestroy (){
    localStorage.clear();
  }

}
