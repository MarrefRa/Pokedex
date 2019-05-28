import {Component, Input} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'ngbd-modal-content',
    templateUrl: 'pokemon.detail.component.html',
    styleUrls: ['pokemon.detail.component.css']
})
export class PokemonDetailComponent {
    @Input() name = '';
    @Input() image = '';
    @Input() experience ;
    @Input() height  ;
    @Input() weight ;
    @Input() abilities;

    constructor(public activeModal: NgbActiveModal) {}
}
