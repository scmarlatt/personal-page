import {Component} from 'angular2/core';
import {Champion} from './champion';

@Component({
	selector: 'my-champion-detail',
	template: `
		<div *ngIf="champion">
	    	<h2>{{champion.name}} details!</h2>
	    	<div><label>id: </label>{{champion.id}}</div>
	    	<div>
	    		<label>name: </label>
	    		<div><input [(ngModel)]="champion.name" placeholder="name"></div>
	    	</div>
	    </div>
	`,
	inputs: ['champion']
})

export class ChampionDetailComponent{
	champion: Champion;
}