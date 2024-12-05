import { Component } from '@angular/core';
import { GestionService } from '../gestion.service';
import { Router } from '@angular/router';
import { ItemMenu } from '../ItemMenu';
import { Order } from '../order';

@Component({
  selector: 'app-checkout2',
  templateUrl: './checkout2.component.html',
  styleUrl: './checkout2.component.css'
})
export class Checkout2Component {

  private id:number=0;

  constructor (private gest:GestionService , private route:Router)
  {
    let x:any=localStorage.getItem("userId");
    this.id= parseInt(x);
  }

  test:boolean=false;
  finaliser()
  {
      let p:any=localStorage.getItem("carts");
      let cart=JSON.parse(p);
      
      let its:ItemMenu[] = cart;
      let cde:Order ={"id":0 , items:[]};
      let j:number=1;

      for (let i of its)
      {
        cde.items.push({"id":j , items:i})
        j++;
      }

      this.gest.addComande(this.id ,cde).subscribe(
        { "next" : (data)=> {this.test=true; console.log(data)}}
      )
   
  }
  

}
