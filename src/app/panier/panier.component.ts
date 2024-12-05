import { Component } from '@angular/core';
import { MonpanierService } from '../monpanier.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrl: './panier.component.css'
})
export class PanierComponent {

  carts:any[]=[];
  total:any=""

  constructor (private gestpan:MonpanierService)
  {
    this.getCarts();
    this.total=localStorage.getItem("total");
    console.log(this.total)
  
  }

  getCarts()
  {
  this.carts=this.gestpan.getPanier();
  }

  delete (id:number)
  {
    this.gestpan.deleteItem(id);
    this.total=localStorage.getItem("total");
    this.getCarts();
  }

}
