import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { JsonPipe, NgIf } from '@angular/common';
import { loadModuleFactory } from '@uirouter/angular';

@Component({
  selector: 'app-details-view-coffee',
  standalone: true,
	imports: [
		JsonPipe,
		NgIf,
	],
  templateUrl: './details-view-coffee.component.html',
  styleUrl: './details-view-coffee.component.css'
})
export class DetailsViewCoffeeComponent implements OnChanges{
	@Input() dataRow: any;

	ngOnChanges(changes: SimpleChanges) {

	}

}
