import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { InfoPagina } from '../interface/info-pagina';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {
  
  info:InfoPagina = {};
  cargado:boolean = false;

  constructor( private http: HttpClient ) {
  	// console.log('Servicio de página listo');
 
  	//Leer el archivo json
    this.http.get("assets/data/data_website.json").subscribe(resp=>{
      this.cargado = true;
      this.info = resp;

      console.log(resp);
    })
    
 
   }
}
