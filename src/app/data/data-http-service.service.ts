import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Coffee, IFilter } from '../common/interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataHttpServiceService {

	baseUrl = "http://localhost:8100"

  constructor(private client: HttpClient) { }

	getCoffee(filter: IFilter): Observable<Coffee>{

		const rawData = this.client.get<Coffee>(`${this.baseUrl}`);
		return filter.applyPipe(rawData);
	}
}
