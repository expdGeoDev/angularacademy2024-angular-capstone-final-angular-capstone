<<<<<<< HEAD
import { TestBed, inject } from '@angular/core/testing';
import { CoffeeHttpService } from './coffee-http.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { environment } from '../env/env';

describe('DataHttpServiceService', () => {

	let service: CoffeeHttpService
	let httpTestingController: HttpTestingController;

  beforeEach(() => {

    TestBed.configureTestingModule({
			imports : [HttpClientTestingModule],
			providers : [CoffeeHttpService],
			schemas: [NO_ERRORS_SCHEMA]
		});

		httpTestingController = TestBed.inject(HttpTestingController);
		service = TestBed.inject(CoffeeHttpService);
  });


	it(`should call [GET] ${environment.restClientUrl}/coffees`, () => {

		service.getAllCoffees().subscribe(
			{
				next: coffees => {
					expect(coffees.length).toBe(1);
					expect(coffees[0].id).toBe(2);
				}
			}
		);

		const req = httpTestingController.expectOne(`${environment.restClientUrl}/coffees`);
		req.flush(
			[
				{
					"id": 2,
					"active": true,
					"roaster": "Tim Horton's",
					"variety": null,
					"size": 20,
					"roast": "dark",
					"format": "k-pod",
					"grind": 4,
					"origin": null,
					"singleOrigin": false,
					"tastingNotes": null
				}
			]
		)
		expect(req.request.method).toBe('GET');
		httpTestingController.verify();
	})


	it(`should call [POST] ${environment.restClientUrl}/coffees`, () => {

		service.addNewCoffee(
			{
				"id": 2,
				"active": true,
				"roaster": "Tim Horton's",
				"variety": null,
				"size": 20,
				"roast": "dark",
				"format": "k-pod",
				"grind": 4,
				"origin": null,
				"singleOrigin": false,
				"tastingNotes": null
			}
		);

		const req = httpTestingController.expectOne(`${environment.restClientUrl}/coffees`);
		expect(req.request.method).toBe('POST');
	})

});


=======
import { TestBed } from '@angular/core/testing';
import { CoffeeHttpService } from './coffee-http.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { environment } from '../env/env';

describe('CoffeeHttpService', () => {

	let service: CoffeeHttpService
	let httpTestingController: HttpTestingController;

  beforeEach(() => {

    TestBed.configureTestingModule({
			imports : [HttpClientTestingModule],
			providers : [CoffeeHttpService],
			schemas: [NO_ERRORS_SCHEMA]
		});

		httpTestingController = TestBed.inject(HttpTestingController);
		service = TestBed.inject(CoffeeHttpService);
  });


	it(`should call [GET] ${environment.restClientUrl}/coffees`, () => {

		service.getAllCoffees().subscribe(
			{
				next: coffees => {
					expect(coffees.length).toBe(1);
					expect(coffees[0].id).toBe(2);
				}
			}
		);

		const req = httpTestingController.expectOne(`${environment.restClientUrl}/coffees`);
		req.flush(
			[
				{
					id: 2,
					active: true,
					roaster: "Tim Horton's",
					variety: null,
					size: 20,
					roast: "dark",
					format: "k-pod",
					grind: 4,
					origin: null,
					singleOrigin: false,
					tastingNotes: null
				}
			]
		)
		expect(req.request.method).toBe('GET');
		httpTestingController.verify();
	})


	it(`should call [POST] ${environment.restClientUrl}/coffees`, () => {

		service.addNewCoffee(
			{
				id: 2,
				active: true,
				roaster: "Tim Horton's",
				variety: null,
				size: 20,
				roast: "dark",
				format: "k-pod",
				grind: 4,
				origin: null,
				singleOrigin: false,
				tastingNotes: null
			}
		).subscribe();

		const req = httpTestingController.expectOne(`${environment.restClientUrl}/coffees`);
		expect(req.request.method).toBe('POST');
	})

});


>>>>>>> capstone-rest-service
