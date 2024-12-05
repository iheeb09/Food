import { Component } from '@angular/core';
import { GestionService } from '../gestion.service';
import { Router } from '@angular/router';
import { request } from 'http';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent {

  
  response: any = { 'token': "" }

  user:any={"nom":"" ,"username":"","password":""}

  test:boolean=true;

  constructor(private gest: GestionService, private route: Router)
   { 
  
  }

 
  


  login(request: any) {
    this.gest.connexion(request).subscribe({


      next: data => {
        console.log(data.body)
        
        let body: any = data.body;
        this.response.token = body.token;
        localStorage.setItem("token", body.token)
        this.gest.saveToken(this.response.token);
        this.route.navigateByUrl("/checkout2");
      }
    })

  }

  inscripition ()
  {
    this.gest.inscription(this.user).subscribe(
    {
      "next": (data)=>(this.test=false),
      "error":(err)=>{console.log(err)}
      
    })
  }

}
