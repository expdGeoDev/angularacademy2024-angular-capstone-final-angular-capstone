import { TestBed } from '@angular/core/testing';
import { CoffeeHttpService } from './coffee-http.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Coffee } from '../common/coffee-model';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('DataHttpServiceService', () => {
  let service: CoffeeHttpService;

  beforeEach(() => {

    TestBed.configureTestingModule({
			imports: [ HttpClientTestingModule],
			providers : [
				CoffeeHttpService,
			],
			schemas: [NO_ERRORS_SCHEMA]
		});

		service = TestBed.inject(CoffeeHttpService);
  });

  it('should be created', () => {
    expect(service).toBeDefined();
  });

	//FIXME: No running | Not sure why
	it('should add 1 more element', () => {

		let coffees: Coffee[] = [];
		let initialCount = 0;

		service
		.getAllCoffees()
		.subscribe({
			next: c =>  {
				coffees = c;
				initialCount = coffees.length;
				console.log(initialCount)
				console.log(coffees);

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

				//FIXME: Not sure if there is a way to make sure to have this running after data is loaded
				expect(coffees.length).toBe(initialCount + 1);
			}
		})

	});

});

