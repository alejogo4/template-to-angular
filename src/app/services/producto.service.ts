import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductoInterface } from '../interface/producto-interface';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  cargado:boolean = false;
  productos:ProductoInterface;

  constructor(private http:HttpClient) { 
    this.cargarProducto();
  }

  private cargarProducto(){
      this.http.get("https://portafolioangular-7c3f3.firebaseio.com/productos_idx.json").
      subscribe( resp=>{
        this.cargado = true;
        this.productos = resp;
        console.log(this.productos);

      })
    
  }

  public cargarItem(id:string){
    return this.http.get(`https://portafolioangular-7c3f3.firebaseio.com/productos/${id}.json`);
  }

}
