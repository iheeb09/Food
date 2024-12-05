import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './accueil/acceuil.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { PanierComponent } from './panier/panier.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { Checkout2Component } from './checkout2/checkout2.component';

const routes: Routes = [

{path:"accueil",component:AcceuilComponent},
{path:"restaurant/:id",component:RestaurantComponent},
{path:"panier",component:PanierComponent},

{path:"checkout",component:CheckoutComponent},
{path:"checkout2",component:Checkout2Component},

{ path:"", redirectTo:"/accueil" , pathMatch:"full"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
