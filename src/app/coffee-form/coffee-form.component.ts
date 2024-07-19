import { AfterContentInit, Component, Input, OnInit } from '@angular/core';
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

	@Input() formType!: FormType
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

	private coffeeList!: Coffee[]

	constructor(
		private service: CoffeeHttpService
	) {}

	ngOnInit(): void {
		this.service
			.getAllCoffees()
			.subscribe(Coffees=> {this.coffeeList = Coffees})
	}

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
		return this.grindLevelList[this.coffee.grind];
	}

	setValueOnIndex(value: string) {
		this.coffee.grind = +value;
	}

	addNewCoffee():void {

		console.log("Entered on add new coffee")
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
		switch (this.formType) {
			case FormType.ADD:
				this.addNewCoffee()
				break;
			case FormType.EDIT:
				this.updateCoffee()
				break;
			default:
				throw "Incorrect Form Type"
		}
	}

	setFormat(value: string) {

		if(
			value === "k-pod" ||
			value === "ground" ||
			value === "beans"
		){
			this.coffee.format = value;
		}
	}

	setRoast(value: string) {

		if(
			value === "dark" ||
			value === "light"||
			value === "espresso"
		){
			this.coffee.roast = value;
		}
	}
}
