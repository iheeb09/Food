import { Component } from '@angular/core';
import { GestionService } from '../gestion.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrl: './acceuil.component.css'
})
export class AcceuilComponent {

  rest:any=[];

  constructor (private gest:GestionService , private route :Router)
  {
    this.GetAllRestaurant()
  }

  GetAllRestaurant() {
    this.gest.getAllRestaurants().subscribe({
      "next": (data) => {
        this.rest = data;
      },
      "error": (err) => {
        console.error('Erreur lors de la récupération des restaurants :', err);
      },
      "complete": () => { }
    });
  }

}
