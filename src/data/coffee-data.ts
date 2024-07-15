
import * as data from './coffee-data.json';

export const coffeeData: Coffee[] = data.coffees as Coffee[];
export type RoastType = 'blonde' | 'light' | 'medium' | 'medium-dark' | 'dark' | 'espresso';
export type FormatType = 'k-pod' | 'beans' | 'ground'

export interface Coffee {
	id: number;
	active: boolean;
	roaster: string;
	variety: string | null;
	size: number;
	roast: RoastType;
	format: FormatType;
	// If you want to limit the numeric values, look here: https://stackoverflow.com/a/39495173
	grind?: number;
	origin: string | null;
	singleOrigin?: boolean;
	tastingNotes: string | null;
	}
