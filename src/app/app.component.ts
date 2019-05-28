import {Component, Input} from '@angular/core';

import {PokedexService} from './pokedex.service';
import {Pokemon} from './pokemon';
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {HttpClient} from '@angular/common/http';
import {PokemonDetailComponent} from './pokemon.detail.component';



@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})

export class AppComponent {
  pokemon: Pokemon[] = [];
  isLoading: boolean ;
  error: boolean ;

  constructor(private pokedexService: PokedexService , private modalService: NgbModal , private httpClient: HttpClient) { }

  ngOnInit() {
    this.loadMore();
  }
  loadMore() {
    this.isLoading = true;

    this.pokedexService.getPokemon(this.pokemon.length, 45)
      .then(pokemon => {
        pokemon = pokemon.map(p => {
          p.imageLoaded = false;
          return p;
        });
        this.pokemon = this.pokemon.concat(pokemon);
        this.isLoading = false;
        this.error = false;
      })
      .catch(() => {
        this.error = true;
        this.isLoading = false;
      });
}
    open(url, img) {
      const  image = img;
      console.log(image);
      this.httpClient.get(url).toPromise().then(res => {
           const modalRef = this.modalService.open(PokemonDetailComponent);
           modalRef.componentInstance.image = image   ;
           modalRef.componentInstance.abilities = res.abilities;
           modalRef.componentInstance.experience = res.base_experience;
           modalRef.componentInstance.height = res.height;
           modalRef.componentInstance.name = res.name;
           modalRef.componentInstance.weight = res.weight   ;
           modalRef.componentInstance.weight = res.weight   ;
       });
    }


}
