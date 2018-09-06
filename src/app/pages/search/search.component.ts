import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoService } from '../../services/producto.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private _route:ActivatedRoute, public _productosServices:ProductoService) { }

  ngOnInit() {
    this._route.params.subscribe(
      parametros=>{
          //console.log(parametros.termino);
          this._productosServices.cargarProductoFiltrado(parametros.termino);
      }
    );
  }

}
