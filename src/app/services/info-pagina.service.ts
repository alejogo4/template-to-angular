import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { InfoPagina } from '../interface/info-pagina';
import { EquipoInterface } from '../interface/equipo-interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {
  
  info:InfoPagina = {};
  cargado:boolean = false;

  equipo:EquipoInterface;

  constructor( private http: HttpClient ) {
  	// console.log('Servicio de página listo');
    this.cargarInfo();
    this.cargarEquipo();
   }


   private cargarInfo(){
     	//Leer el archivo json
      this.http.get("assets/data/data_website.json").subscribe(resp=>{
        this.cargado = true;
        this.info = resp;
        //console.log(resp);
      })
   }

   private cargarEquipo(){
      this.http.get("https://portafolioangular-7c3f3.firebaseio.com/equipo.json")
      .subscribe(resp=>{
          this.equipo = resp;
          //console.log(this.equipo[0]);
      })
   }
}
