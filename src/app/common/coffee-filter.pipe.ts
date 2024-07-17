import { Observable, UnaryFunction, pipe, filter, identity, map} from "rxjs";
import { Coffee, IFilter, IPipeBuilder } from "./coffee-model";

export class DefaultPipeBuilder implements IPipeBuilder {

	private filterList: UnaryFunction<Observable<Coffee[]>, Observable<Coffee[]>>[] = []

	withRoaster(roasterCategories: string[]): IPipeBuilder {

		if(roasterCategories){
			this.filterList.push(
				map(
					coffees => coffees.filter(
						coffee => roasterCategories.some(
							(cat => cat.match(coffee.roaster))
						)
					)
				)
			);
		}

		return this;
	}

	withVariety(variety: string[]): IPipeBuilder {

		if(variety){
			this.filterList.push(
				map(
					coffees => coffees.filter(
						coffee => variety.some(
							variety => variety.match(coffee.variety??""))
					)
				)
			);
		}

		return this;
	}

	withRoast(roasts: string[]): IPipeBuilder {

		if(roasts){
			this.filterList.push(
				map(
					coffees => coffees.filter(
						coffee => roasts.some(
							roast => roast.match(coffee.roast)
						)
					)
				)
			);
		}

		return this;
	}

	withFormat(formats: string[]): IPipeBuilder {

		if(formats){
			this.filterList.push(
				map(
					coffees => coffees.filter(
						coffee => formats.some(
							roast => roast.match(coffee.format)
						)
					)
				)
			);
		}

		return this;
	}

	withOrigin(origins: string[]): IPipeBuilder {

		if(origins){
			this.filterList.push(

				map(
					coffees => coffees.filter(
						coffee => origins.some(
							roast => roast.match(coffee.origin??"")
						)
					)
				)
			);
		}

		return this;
	}

	betweenGrind(minimumSize: number, maximumSize: number): IPipeBuilder {

		if(minimumSize <= maximumSize){
			this.filterList.push(
				map(
					coffees => coffees.filter(
						coffee => (
								coffee.grind >= minimumSize &&
								coffee.grind <= maximumSize
						)
					)
				)
			)
		}

		return this;
	}

	betweenSize(minimumSize: number, maximumSize: number): IPipeBuilder {

		if(minimumSize <= maximumSize){
			this.filterList.push(
				map(
					coffees => coffees.filter(
						coffee => (
								coffee.size >= minimumSize &&
								coffee.size <= maximumSize
						)
					)
				)
			)
		}

		return this;

	}

	withActive(activeStatus: boolean | undefined): IPipeBuilder {

		if(activeStatus !== undefined){
			this.filterList.push(
				map(
					coffees => coffees.filter(
						coffee => coffee.active == activeStatus
					)
				)
			)
		}

		return this;
	}

	withSingleOrigin(singleOrigin: boolean | undefined): IPipeBuilder {

		if(singleOrigin !== undefined){
			this.filterList.push(
				map(
					coffees => coffees.filter(
						coffee => coffee.singleOrigin == singleOrigin
					)
				)
			)
		}

		return this;
	}

	build(): IFilter {
		return new DefaultFilter(pipe(this.pipeFromArray(this.filterList)));
	}

	private pipeFromArray<T, R>(fns: Array<UnaryFunction<T, R>>): UnaryFunction<T, R> {
		if (fns.length === 0) {
			return identity as UnaryFunction<any, any>;
		}

		if (fns.length === 1) {
			return fns[0];
		}

		return function piped(input: T): R {
			return fns.reduce((prev: any, fn: UnaryFunction<T, R>) => fn(prev), input as any);
		};
	}

}

class DefaultFilter implements IFilter{

	constructor( private filterPipe:UnaryFunction<Observable<Coffee[]>, Observable<Coffee[]>>){ }

	applyPipe(rawData: Observable<Coffee[]>): Observable<Coffee[]>{
		return this.filterPipe(rawData);
	}
}
