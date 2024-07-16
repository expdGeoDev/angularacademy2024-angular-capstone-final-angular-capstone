import { TestBed } from '@angular/core/testing';
import { DataHttpServiceService } from './data-http-service.service';
import { Coffee, IFilter } from '../common/interfaces';
import { DefaultPipeBuilder } from '../common/pipe-builder';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

describe('DataHttpServiceService', () => {
  let service: DataHttpServiceService;
	let mockHttpClient: { get: { and: { returnValue: (arg0: Observable<Coffee>) => void; }; }; };

  beforeEach(() => {

		mockHttpClient = jasmine.createSpyObj(['get']);

    TestBed.configureTestingModule({
			providers : [
				{provide: HttpClient, useValue: mockHttpClient}
			],
			schemas: [NO_ERRORS_SCHEMA]
		});
    service = TestBed.inject(DataHttpServiceService);
  });

  it('should be created', () => {
    expect(service).toBeDefined();
  });

	it('should not be empty', () => {

		mockHttpClient.get.and.returnValue(of<Coffee>(
			{
				"id":0,
				"active": true,
				"roaster": "Tim Horton's",
				"variety": null,
				"size": 14,
				"roast": "dark",
				"format": "k-pod",
				"grind": 8,
				"origin": null,
				"singleOrigin": true,
				"tastingNotes": null
			}
		))

		const filters: IFilter = new DefaultPipeBuilder()
		.withActive(true)
		.withSingleOrigin(true)
		.withRoast(["dark"])
		.betweenSize(19, 21)
		.build();

		service.getCoffee(filters).subscribe();
		expect(coffees)
	});

});

