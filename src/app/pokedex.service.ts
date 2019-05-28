import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
/*import 'rxjs/add/operator/toPromise';*/

@Injectable()
export class PokedexService {
  private baseUrl = 'https://pokeapi.co/api/v2/pokemon/';
  private baseSpriteUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

  constructor(private http: Http) { }

  getPokemon(offset: number, limit: number) {
    return this.http.get(`${this.baseUrl}?offset=${offset}&limit=${limit}`)
      .toPromise()
      .then(response => response.json().results)
      .then(items => {
          return items.map((item, idx) => {
              const id: number = idx + offset + 1;
              if (item.name.includes('w')) {
                  return {
                      name: item.name,
                      sprite: `${this.baseSpriteUrl}${id}.png`,
                      url: item.url,
                      id,
                      taken: true
                  };
              } else {

                  return {
                      name: item.name,
                      sprite: `${this.baseSpriteUrl}${id}.png`,
                      url: item.url,
                      id,
                      taken : false
                  };
              }

          });
      });
  }
}
