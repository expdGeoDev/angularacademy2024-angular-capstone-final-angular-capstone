import { HttpClient, HttpClientModule } from "@angular/common/http"
import { TestBed } from "@angular/core/testing"
import { CoffeeHttpService } from "./coffee-http.service"
import { environment } from "../env/env"
import { Coffee } from "../common/coffee-model"


describe("CoffeeHttpService [Integration]", () => {

	let service: CoffeeHttpService;
	const newCoffee: Coffee  = {
		id: 0,
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

	beforeEach(() => {

		TestBed.configureTestingModule({
			imports: [HttpClientModule],
			providers: [
				CoffeeHttpService
			],
		})

		jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;

		TestBed.inject(HttpClient);
		service = TestBed.inject(CoffeeHttpService)
	})

	it("should be defined", () => {
		expect(service).toBeDefined();
	})

	it(`should call [GET] ${environment.restClientUrl}/coffees`, (done: DoneFn) => {
		service
			.getAllCoffees()
			.subscribe(coffees => {

				expect(coffees.length).toBeGreaterThan(0);
				done()
			})
	})

	it(`should call [GET] ${environment.restClientUrl}/coffees/id`, (done: DoneFn) => {
		service
			.getAllCoffees()
			.subscribe(coffees => {
				expect(coffees.length).toBeGreaterThan(0);

				service
					.getCoffeeById(coffees[0].id)
					.subscribe(coffee => {

						expect(coffee).toBeDefined();
						done();
					})
			})
	})

	it(`should call [POST] ${environment.restClientUrl}/coffees`, (done: DoneFn) => {
		service
			.addNewCoffee(newCoffee)
			.subscribe(coffee => {

				expect(coffee.id).toBeGreaterThan(0);
				done();
			})
	})

	it(`should call [DELETE] ${environment.restClientUrl}/coffees`, (done : DoneFn) => {
		service
			.addNewCoffee(newCoffee)
			.subscribe( coffee => {

				expect(coffee.id).toBeGreaterThan(0)
				service.deleteCoffee(coffee.id).subscribe();
				done()
			})
	})

	it(`should call [PUT] ${environment.restClientUrl}/coffees/1`, (done : DoneFn) => {
		service
			.addNewCoffee(newCoffee)
			.subscribe( coffee => {
				console.log("PUT", coffee)
				expect(coffee).toBeDefined();

				coffee.roaster = "Test After Update";
				service
					.updateCoffee(coffee)
					.subscribe(updatedCoffee => {
						expect(updatedCoffee.roaster).toBe("Test After Update")
						service.deleteCoffee(updatedCoffee.id).subscribe();
					})
				done()
			})
	})

})
