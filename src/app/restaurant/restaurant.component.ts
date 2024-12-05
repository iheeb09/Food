import { Component } from '@angular/core';
import { GestionService } from '../gestion.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MonpanierService } from '../monpanier.service';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrl: './restaurant.component.css'
})
export class RestaurantComponent {
  rest:any=[]
  menu:any=[]
  pan:any=[]
  id:number=0;

  constructor(private gest:GestionService , private route:Router  ,private act:ActivatedRoute , private gestpan:MonpanierService )
  {
    this.id=this.act.snapshot.params["id"];
    this.getRest();
    this.GetMenu();
    this.getPanier();


  }


  getRest() {
    this.gest.getRestaurantById(this.id).subscribe({
      "next": (data) => {
        this.rest = data;
      },
      "error": (err) => {
        console.error('Erreur lors de la récupération des restaurants :', err);
      },
      "complete": () => { }
    });
  }

  GetMenu()
  {
    this.gest.getMenuByRest(this.id).subscribe({
      "next": (data) => {
        this.menu = data;
      },
      "error": (err) => {
        console.error('Erreur lors de la récupération des restaurants :', err);
      },
      "complete": () => { }
    });
  }

  getPanier()
  {
    this.pan=this.gestpan.getPanier();
    console.log(this.pan);
  }

  addToCart(item:any)
  {
    this.gestpan.AddPanier(item)
  }

}
