import { TestBed } from '@angular/core/testing';

import { DataHttpServiceService } from './data-http-service.service';
import { IFilter } from '../common/interfaces';
import { DefaultPipeBuilder } from '../common/pipe-builder';

describe('DataHttpServiceService', () => {
  let service: DataHttpServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataHttpServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

	it('should not be empty', () => {

		const filters: IFilter = new DefaultPipeBuilder()
		.withActive(true)
		.withSingleOrigin(true)
		.withRoast(["dark"])
		.betweenSize(19, 21)
		.build();

		const a = service.getCoffee(filters).subscribe({});
	});

});
