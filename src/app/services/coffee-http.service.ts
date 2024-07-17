import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../env/env';
import { IFilter, Coffee } from "../common/coffee-model";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoffeeHttpService {

	private headers:HttpHeaders = new HttpHeaders();

  constructor(private client: HttpClient) {
		this.headers.set( 'Content-Type', 'application/json')
		this.headers.set('Cache-Control', 'no-cache');
	}

	getAllCoffees(): Observable<Coffee[]>{

		return this.client.get<Coffee[]>(`${environment.restClientUrl}/coffees`);
	}

	addNewCoffee(coffee: Coffee) {
		this.client
			.post(
				`${environment.restClientUrl}/coffees`,
				JSON.stringify(coffee), {}
			)
			.subscribe();
	}
}
