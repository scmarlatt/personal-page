import {Component} from 'angular2/core';
import {Champion} from './champion';
import {ChampionDetailComponent} from './champion-detail.component';
import {ChampionService} from './champion.service';
import {OnInit} from 'angular2/core';

@Component({
    selector: 'my-app',
    styles:[`
    	.selected {
    		background-color: #CFD8DC !important;
    		color: white;
    	}
    	.champions {
    		margin: 0 0 2em 0;
    		list-style-type: none;
    		padding: 0;
    		width: 10em;
    	}
    	.champions li {
    		cursor: pointer;
    		position: relative;
    		left: 0;
    		background-color: #EEE;
    		margin: .5em;
    		padding: .3em 0em;
    		height: 1.6em;
    		border-radius: 4px;
    	}
    	.champions li.selected:hover{
    		color: white;
    	}
    	.champions li:hover {
		    color: #607D8B;
		    background-color: #EEE;
		    left: .1em;
		}
    	.champions .text {
    		position: relative;
    		top: -3px;
    	}
    	.champions .badge {
    		display: inline-block;
    		font-size: small;
    		color: white;
    		padding: 0.8em 0.7em 0em 0.7em;
    		background-color: #607D8B;
    		line-height: 1em;
    		position: relative;
    		left: -1px;
    		top: -4px;
    		height: 1.8em;
    		margin-right: .8em;
    		border-radius: 4px 0px 0px 4px;
    	}
    `],
    template: `
    	<h1>{{title}}</h1>
    	<h2>My Champions</h2>
    	<ul class="champions">
    		<li *ngFor="#champion of champions" (click)="onSelect(champion)" [class.selected]="champion === selectedChampion">
    			<span class="badge">{{champion.id}}</span> {{champion.name}}
    		</li>
    	</ul>
    	<my-champion-detail [champion]="selectedChampion"></my-champion-detail>
    `,
    directives: [ChampionDetailComponent],
    providers: [ChampionService]
})

export class AppComponent implements OnInit{ 
	constructor(private _championService: ChampionService) { }

	public champions: Champion[];
	public title = 'Tour of Champions';
	public selectedChampion: Champion;

	public onSelect(champion: Champion){
		this.selectedChampion = champion;
	}

	public getChampions() {
		this.champions = this._championService.getChampions();
	}

	ngOnInit() {
  		this.getChampions();
  	}
}