import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFirestore } from 'angularfire2/firestore';

export class Hero {
  constructor(public id: string, public name: string) {
  }
}

@Injectable()
export class HeroService {
  heroes: Observable<any[]>;

  constructor(db: AngularFirestore) {
    this.heroes = db.collection('heroes').valueChanges();
  }

  getHeroes() {
    return this.heroes;
  }

  getHero(id: string) {
    return this.getHeroes()
      .map(heroes => heroes.find(hero => hero.id === id));
  }
}
