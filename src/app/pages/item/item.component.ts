import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoService } from '../../services/producto.service';
import { ItemInterface } from '../../interface/item-interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  itemProducto:ItemInterface;
  id:string;
  constructor(private route:ActivatedRoute, public _productoServices:ProductoService) { }

  ngOnInit() {

    this.route.params.subscribe(
      parametros=>{
        this._productoServices.cargarItem(parametros.id)
        .subscribe((resp:ItemInterface)=>{
            this.itemProducto = resp;
            this.id = parametros.id;
            console.log(resp);
        });
    })
  }

}
