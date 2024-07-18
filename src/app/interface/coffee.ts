export interface Coffee {

	// export type RoastType = 'blonde' | 'light' | 'medium' | 'medium-dark' | 'dark' | 'espresso';
	// export type FormatType = 'k-pod' | 'beans' | 'ground'

	id: number;
	active: boolean;
	variety: string;
	size: number;
	roast: string;
	roaster: string;
	format: string;
	grind?: number;
	origin: string;
	singleOrigin?: boolean;
	tastingNotes?: string;

}
