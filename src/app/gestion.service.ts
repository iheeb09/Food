import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Order } from './order';

@Injectable({
  providedIn: 'root'
})
export class GestionService {

  



  username: any = "";
  token: any = "";
  id:number=0;

  constructor(private http: HttpClient) { }
  connexion(request: any) {
    return this.http.post("http://127.0.0.1:8089/auth/login", request, { observe: 'response' });
  }

  saveToken(token: any) {
    let hp = new JwtHelperService();
    this.username = hp.decodeToken(token).sub;
    let id=hp.decodeToken(token).userId;
    localStorage.setItem("userId",id)
    this.token = token;

  }


  getAllRestaurants()
  {
    return this.http.get("http://127.0.0.1:8089/back/restaurants");
  }

  getRestaurantById(id: number) {
   
    return this.http.get(`http://localhost:8089/back/restaurant/${id}`);
  }

  getMenuByRest(id:number)
  {
    
    return this.http.get(`http://127.0.0.1:8089/back/menu/restaurant/${id}`);
  }

  inscription(user:any)
  {
    
    return this.http.post("http://127.0.0.1:8089/auth/inscription",user);
  }

  addComande(userId:number , cde:Order)

  {
    let token:any=localStorage.getItem("token");
    let headers=new HttpHeaders({"authorization":token});
    

    return this.http.post("http://127.0.0.1:8089/back/addCommande/"+userId,cde,{headers:headers});
  }


}
