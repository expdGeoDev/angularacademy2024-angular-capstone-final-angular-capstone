import { Component, OnInit } from '@angular/core';
import { CoffeeHttpService } from '../services/coffee-http.service';
import { Coffee } from '../common/coffee-model';

@Component({
  selector: 'app-coffee-form',
  standalone: true,
  imports: [],
  templateUrl: './coffee-form.component.html',
  styleUrl: './coffee-form.component.css'
})
export class CoffeeFormComponent implements OnInit {
	constructor(private Service: CoffeeHttpService) {

	}

	ngOnInit(): void {
	this.Service.getAllCoffees().subscribe(Coffees=> {this.coffeeList = Coffees})
	}
	private coffeeList!: Coffee[]
}
