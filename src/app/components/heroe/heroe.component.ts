import { Component,  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { log } from 'util';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent  {

  constructor(private activatedRoute: ActivatedRoute) {

    this.activatedRoute.params.subscribe(params => {
      console.log(params);
    });
   }



}
