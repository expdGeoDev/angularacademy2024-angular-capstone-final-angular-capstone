import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Coffee, IFilter } from '../common/coffee-model';

@Injectable({
  providedIn: 'root'
})
export class DataHttpServiceService {

	baseUrl = "http://localhost:8100"

  constructor(private client: HttpClient) { }

	getCoffee(filter: IFilter): Observable<Coffee>{

		const rawData: Observable<Coffee> = this.client.get<Coffee>(`${this.baseUrl}`);
		return filter.applyPipe(rawData);
	}
}
