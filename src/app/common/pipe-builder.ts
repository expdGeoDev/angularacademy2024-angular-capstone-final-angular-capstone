import { Observable, UnaryFunction, pipe, filter, identity} from "rxjs";
import { Coffee, IFilter, IPipeBuilder } from "./interfaces";

export class DefaultPipeBuilder implements IPipeBuilder {

	private filterList: UnaryFunction<Observable<Coffee>, Observable<Coffee>>[] = []

	withRoaster(roasterCategories: string[]): IPipeBuilder {

		if(roasterCategories){
			this.filterList.push(
				filter(s => roasterCategories.some(x => x.match(s.roaster)))
			);
		}

		return this;
	}

	withVariety(variety: string[]): IPipeBuilder {

		if(variety){
			this.filterList.push(
				filter(s => variety.some(x => x.match(s.variety)))
			);
		}

		return this;
	}

	withRoast(roasts: string[]): IPipeBuilder {

		if(roasts){
			this.filterList.push(
				filter(s => roasts.some(x => x.match(s.roast)))
			);
		}

		return this;
	}

	withFormat(formats: string[]): IPipeBuilder {

		if(formats){
			this.filterList.push(
				filter(s => formats.some(x => x.match(s.format)))
			);
		}

		return this;
	}

	withOrigin(origins: string[]): IPipeBuilder {

		if(origins){
			this.filterList.push(
				filter(s => origins.some(x => x.match(s.origin)))
			);
		}

		return this;
	}

	betweenGrind(minimumSize: number, maximumSize: number): IPipeBuilder {

		if(minimumSize <= maximumSize){
			this.filterList.push(
				filter(s => s.grind >= minimumSize && s.grind <= maximumSize)
			)
		}

		return this;
	}

	betweenSize(minimumSize: number, maximumSize: number): IPipeBuilder {

		if(minimumSize <= maximumSize){
			this.filterList.push(
				filter(s => s.size >= minimumSize && s.size <= maximumSize)
			)
		}

		return this;
	}

	withActive(activeStatus: boolean | undefined): IPipeBuilder {

		if(activeStatus !== undefined){
			this.filterList.push(
				filter(s => s.active === activeStatus)
			)
		}

		return this;
	}

	withSingleOrigin(singleOrigin: boolean | undefined): IPipeBuilder {

		if(singleOrigin !== undefined){
			this.filterList.push(
				filter(s => s.active === singleOrigin)
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

	constructor( private filterPipe:UnaryFunction<Observable<Coffee>, Observable<Coffee>>){ }

	applyPipe(rawData: Observable<Coffee>): Observable<Coffee>{
		return this.filterPipe(rawData);
	}
}
