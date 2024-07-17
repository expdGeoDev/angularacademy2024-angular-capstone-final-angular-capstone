import { TestBed } from '@angular/core/testing';

import { CoffeeDataService } from './coffee-data.service';
import { CoffeeHttpService } from './coffee-http.service';

describe('CoffeeDataService', () => {
  let service: CoffeeDataService;
	let coffeeHttpService: CoffeeHttpService;

  beforeEach(() => {
		coffeeHttpService = jasmine.createSpyObj<CoffeeHttpService>(['getAllCoffees']);

    TestBed.configureTestingModule({
			providers : [
				CoffeeDataService, {provide: CoffeeHttpService, useValue: coffeeHttpService}
			]
		});

    service = TestBed.inject(CoffeeDataService);
  });

  it('should be created', () => {
		expect(service).toBeDefined();
  });
});
