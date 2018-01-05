import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { log } from 'util';
import { HeroesService, Heroe } from '../../servicios/heroes.service';


@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html'
})
export class BuscadorComponent implements OnInit {
   heroesArr:Heroe[] = [];
   termino:string;


  constructor(private activatedRoute: ActivatedRoute,
  private _heroesService:HeroesService) {


    }

  ngOnInit() {

    this.activatedRoute.params.subscribe(params => {
      this.termino = params['termino'];
      this.heroesArr = this._heroesService.buscarHeroes(params['termino']);
      console.log(  this.heroesArr);
    });
  }

}
