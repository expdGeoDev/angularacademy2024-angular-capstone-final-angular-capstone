import { Component, Input, OnInit } from '@angular/core';
import { CoffeeHttpService } from '../services/coffee-http.service';
import { Coffee, FormType } from '../common/coffee-model';
import { FormsModule } from '@angular/forms';
import { NgForOf, TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-coffee-form',
  standalone: true,
	imports: [
		FormsModule, NgForOf, TitleCasePipe,
	],
  templateUrl: './coffee-form.component.html',
  styleUrl: './coffee-form.component.css'
})
export class CoffeeFormComponent implements OnInit {
	private currentValue: number;
	@Input() formType!: FormType
	constructor(private service: CoffeeHttpService) {
	this.currentValue = 0;
	}

	ngOnInit(): void {
	this.service.getAllCoffees().subscribe(Coffees=> {this.coffeeList = Coffees})
	}
	private coffeeList!: Coffee[]

	coffee: Coffee = this.createEmptyCoffee();
	size: number[] = [8,12,14,16,20,24,]
	roast: string[] = [ "dark","light","espresso" ]
	format: string[] = [ "k-pod","ground","beans" ]
	grindLevelList: string[] = [
		'Extra Coarse',
		'Coarse',
		'Medium-Coarse',
		'Medium',
		'Medium-Fine',
		'Fine',
		'Extra-Fine'
	]

	createEmptyCoffee(): Coffee{
		return{
			id: 0,
			active: true,
			roaster: "",
			variety: "",
			size: 8,
			roast: "dark",
			format: "k-pod",
			grind: 0,
			origin: "",
			singleOrigin: false,
			tastingNotes: ""
		}
	}

	getCurrentValue() {
		return this.grindLevelList[this.currentValue];
	}

	setValueOnIndex(value: string) {
		this.currentValue = +value;
	}

	addNewCoffee():void {

		this.service
			.addNewCoffee(this.coffee)
			.subscribe()
	}

	updateCoffee():void {

		this.service
			.updateCoffee(this.coffee)
			.subscribe()
	}

	submit() {
		// // switch (this.formType) {
		// // 	case FormType.ADD:
		// // 		this.addNewCoffee()
		// // 		break;
		// // 	case FormType.EDIT:
		// // 		this.updateCoffee()
		// // 		break;
		// // 	default:
		// // 		throw "Incorrect Form Type"
		// }

		console.log(this.coffee);
	}
}
