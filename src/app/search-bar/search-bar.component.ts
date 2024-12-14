import { Component, Output } from '@angular/core';
import { Coffee} from '../../data/coffee-data';
import { CoffeeHttpService } from '../coffee-http.service';
import { Observable } from 'rxjs';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  standalone: true,
	imports: [
		FormsModule,
	],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {
	@Output()
	searchResult: Observable<Coffee[]> | undefined;
	searchString = '';

	constructor(private coffeeHTTPService: CoffeeHttpService){}

	onSubmit(){
		this.searchResult =  this.coffeeHTTPService.findBySearchString(this.searchString);
	};
}
