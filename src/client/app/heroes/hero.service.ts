import { Injectable } from '@angular/core';

import {Hero} from "./hero.dataprovider";
import {HEROES} from "./mock-heroes";

@Injectable()
export class HeroService {
  getHeroes(): Hero[] {
    return HEROES;
  }
}


/*@Injectable()
export class HeroService {
  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }
}*/
