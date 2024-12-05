import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MonpanierService {

  constructor() { }


  getPanier():any[]
  {
    let pan =localStorage.getItem("carts");
    if(pan)
    {
      return JSON.parse(pan);
    }
    else 
      return [];
  }
  
  AddPanier(item:any)
  {
    let pan=this.getPanier();
    pan.push(item);
    localStorage.setItem("carts", JSON.stringify(pan))
    let tot = 0;
    for (let item of pan)
    {
      tot+=item.prix || 0 ;
    }
    
  localStorage.setItem("total", tot.toString())

}

deleteItem(i:number)
{
  let pan=this.getPanier();
  pan.splice(i,1);
  
  let tot = 0;
  for (let item of pan)
  {
    tot+=item.prix || 0 ;
  }
  

localStorage.setItem("total", tot.toString())
localStorage.setItem("carts",JSON.stringify(pan))


}
}
