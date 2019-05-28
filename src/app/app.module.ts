import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent  } from './app.component';
import { PokemonDetailComponent  } from './pokemon.detail.component';
import { HttpModule } from '@angular/http';
import { FilterPipe} from './filter.pipe';

import { PokedexService } from './pokedex.service';
import { CapitalizePipe } from './capitalize.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
      FilterPipe,
      CapitalizePipe,
      PokemonDetailComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpModule,
    NgbModule,
    HttpClientModule,
  ],
  providers: [PokedexService],
  entryComponents: [AppComponent,PokemonDetailComponent],
  bootstrap: [AppComponent]
})
export class AppModule {

}
