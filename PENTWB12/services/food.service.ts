import {Injectable} from '@angular/core';

@Injectable()
export class FoodService{

constructor(){}

getGroups():Array<string>{
return [
	"Fruits",
	"Vegetables",
	"Grains",
	"Meats",
	"Dairy"
	];
}
getGroups_promise():Promise<string[]>{

return Promise.resolve([
	"Fruits",
	"Vegetables",
	"Grains",
	"Meats",
	"Dairy"
	]);
	}
}