import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../servicios/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html'
})
export class BusquedaComponent implements OnInit {

  heroes: Heroe[] = [];
  termino: string;

  constructor( private activatedRoute: ActivatedRoute,
               private heroesService: HeroesService,
               private router: Router ) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( params => {
      this.termino = params['term'];
      this.heroes = this.heroesService.buscarHeroes( params['term'] );
      console.log(this.termino);
    });
  }

  // verHeroe(idx: number) {
  //   this.router.navigate(['/heroe', idx]);
  // }

}
