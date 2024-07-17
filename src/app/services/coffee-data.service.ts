<<<<<<< HEAD
import { Injectable } from '@angular/core';
import { CoffeeHttpService } from './coffee-http.service';
import { Coffee, IFilter } from '../common/coffee-model';

@Injectable({
  providedIn: 'root'
})
export class CoffeeDataService {

  constructor(
		private client: CoffeeHttpService
	) { }

	filterAllCoffees(filter: IFilter){
		return filter.applyPipe(this.client.getAllCoffees())
	}


	getAllCoffee(): any{
		let coffeeData : Coffee[];
		this.client.getAllCoffees()
			.subscribe({
				next:(data)=>{
					coffeeData = data;
					console.log("scoop");
				}
				,complete:()=>{
				return coffeeData
				}})
	}
}
=======
import { Injectable } from '@angular/core';
import { CoffeeHttpService } from './coffee-http.service';
import { Coffee, IFilter } from '../common/coffee-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoffeeDataService {

  constructor(
		private client: CoffeeHttpService
	) { }

	filterAllCoffees(filter: IFilter): Observable<Coffee[]>{
		return filter.applyPipe(this.client.getAllCoffees())
	}
}
>>>>>>> capstone-rest-service
