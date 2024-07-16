import { Observable } from "rxjs";

export interface Coffee {

	id: number,
	active: boolean,
	roaster: string,
	variety: string,
	size: number,
	roast: "daark" | "light",
	format: "k-pod",
	grind: number,
	origin: string,
	singleOrigin: boolean,
	tastingNotes: string,
}

export interface IPipeBuilder {

	withRoaster(roasterCategories: string[]):IPipeBuilder;
	withVariety(varity: string[]):IPipeBuilder;
	withRoast(roasts: string[]):IPipeBuilder;
	withFormat(formats: string[]):IPipeBuilder;
	withOrigin(origins: string[]):IPipeBuilder;
	betweenGrind(minimumSize:number, maximumSize: number):IPipeBuilder;
	betweenSize(minimumSize: number, maximumSize: number):IPipeBuilder;
	withActive(activeStatus: true | false | undefined):IPipeBuilder;
	withSingleOrigin(singleOrigins: true | false | undefined):IPipeBuilder;

	build(): IFilter;
}

export interface IFilter {

	applyPipe(rawData: Observable<Coffee>): Observable<Coffee>;
}

