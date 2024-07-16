import { TestBed } from '@angular/core/testing';

import { CoffeeDataService } from './coffee-data.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CoffeeHttpService } from './coffee-http.service';

describe('CoffeeDataService', () => {
  let service: CoffeeDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
			imports: [
				HttpClientTestingModule,
				CoffeeHttpService
			],
			providers : [CoffeeDataService]
		});
    service = TestBed.inject(CoffeeDataService);
  });

  it('should be created', () => {
		expect(service).toBeDefined();
  });
});
