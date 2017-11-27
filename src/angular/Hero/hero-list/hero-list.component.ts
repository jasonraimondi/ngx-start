import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';

import { Hero, HeroService } from '../hero.service';

@Component({
  selector: 'hero-list',
  template: require('./hero-list.html')
})

export class HeroListComponent implements OnInit {
  heroes$: Observable<Hero[]>;

  constructor(private service: HeroService) {
  }

  ngOnInit() {
    this.heroes$ = this.service.getHeroes();
  }
}
