import {TestBed,async, inject} from '@angular/core/testing';
import {FoodService} from './food.service';


describe('FoodService', () => {
	it(' #getGroups shoud return 5 groups' , () => {
	let foodService = new FoodService();
	let foodGroups = foodService.getGroups();
	
	expect(foodGroups).toBeTruthy;
	
	expect(foodGroups.length).toBe(5);
	});

});

it(" #getGroups_promise should return 5 groups", done => {
	let foodService = new FoodService();
	foodService.getGroups_promise().then ( groups => {
		expect(groups.length).toBe(5);
		
		done();
	});