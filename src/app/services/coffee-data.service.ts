import { Injectable } from '@angular/core';
import { CoffeeHttpService } from './coffee-http.service';
import { IFilter } from '../common/coffee-model';

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
}
