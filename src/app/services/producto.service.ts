import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductoInterface } from '../interface/producto-interface';
import { resolve } from 'dns';
import { reject } from 'q';


@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  cargado:boolean = false;
  productos:ProductoInterface[];
  productoFiltrado:ProductoInterface[];

  constructor(private http:HttpClient) { 
    this.cargarProducto();
  }

  private cargarProducto(){
      return new Promise((resolve,reject)=>{
        this.http.get("https://portafolioangular-7c3f3.firebaseio.com/productos_idx.json").
        subscribe( (resp:ProductoInterface[])=>{
          this.cargado = true;
          this.productos = resp;
          resolve(); //para indicar que la promesa termino exitosamente
        })
      })

  }

  public cargarItem(id:string){
    return this.http.get(`https://portafolioangular-7c3f3.firebaseio.com/productos/${id}.json`);
  }

  public cargarProductoFiltrado(termino:string){
    
      if(this.productos == null){
        this.cargarProducto().then(()=>{
          this.asignarFiltroVar(termino);
        })
      }else{
          this.asignarFiltroVar(termino);
      }
      
  }

  private asignarFiltroVar(termino:string){
    
    this.productoFiltrado=[];
    this.productos.forEach(prod=> {
        if(prod.categoria.indexOf(termino)>=0 || prod.titulo.indexOf(termino)>=0){
           this.productoFiltrado.push(prod);
        }
    });
  }

}
