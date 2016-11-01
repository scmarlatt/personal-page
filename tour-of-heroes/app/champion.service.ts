import {CHAMPIONS} from './mock-champions';
import {Injectable} from 'angular2/core';

@Injectable()
export class ChampionService{
	getChampions(){
		return CHAMPIONS;
	}
}