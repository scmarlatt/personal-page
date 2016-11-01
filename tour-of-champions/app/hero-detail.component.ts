//importing two decorators
import { Component, Input } from '@angular/core';
import {Hero} from './hero';

//meta deta for the component, should include html and css and such 
@Component({
	selector: 'my-hero-detail',
	template:`
	<div *ngIf="hero">
		<h2>{{hero.name}} details!</h2>
		<div><label>id: </label></div>
		<div>
			<label>name: </label>
			<input [(ngModel)]="hero.name" placeholder="name"/>
		</div
	</div>
	`
})

//export to make available to other classes
export class HeroDetailComponent {
	@Input()
	hero: Hero;
}
