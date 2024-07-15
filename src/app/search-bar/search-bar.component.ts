import { Component } from '@angular/core';
import { Coffee, coffeeData } from '../../data/coffee-data';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {
	protected readonly beans = coffeeData;

	onSubmit(searchString: string){
		return this.beans.filter((coffee) => coffee.roaster === searchString);
	};
}
