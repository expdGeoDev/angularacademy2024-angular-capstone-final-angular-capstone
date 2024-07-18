import { TestBed } from '@angular/core/testing';
import { CoffeeDataService } from './coffee-data.service';
import { CoffeeHttpService } from './coffee-http.service';
import { of } from 'rxjs';
import { Coffee } from '../common/coffee-model';
import { DefaultPipeBuilder } from '../common/coffee-filter.pipe';

describe('CoffeeDataService', () => {
  let service: CoffeeDataService;
	let coffeeHttpService: jasmine.SpyObj<CoffeeHttpService>;

  beforeEach(() => {
		coffeeHttpService = jasmine.createSpyObj<CoffeeHttpService>(['getAllCoffees']);

    TestBed.configureTestingModule({
			providers : [
				CoffeeDataService, {provide: CoffeeHttpService, useValue: coffeeHttpService}
			]
		});

    service = TestBed.inject(CoffeeDataService);
  });

  it('should be defined', () => {
		expect(service).toBeDefined();
  });

	it('should filter the data using some filter object', (done: DoneFn) => {

		coffeeHttpService.getAllCoffees.and
			.returnValue(of(
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
					} as Coffee
				]
			))

		service.filterAllCoffees(
			new DefaultPipeBuilder()
			.build()
		) .subscribe( coffees => {

				expect(coffees.length).toBe(1);
				expect(coffees[0].id).toBe(2);
				done();
			});
	})

});
