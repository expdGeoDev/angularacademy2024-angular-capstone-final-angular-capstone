import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgClass, NgForOf, NgIf } from '@angular/common';
import { CoffeeDataService } from '../services/coffee-data.service';
import { Coffee } from '../common/coffee-model';
import { CoffeeHttpService } from '../services/coffee-http.service';

@Component({
  selector: 'app-table-coffee',
  standalone: true,
	imports: [
		NgForOf,
		NgIf,
		NgClass,
	],
  templateUrl: './table-coffee.component.html',
  styleUrl: './table-coffee.component.css'
})
export class TableCoffeeComponent implements OnInit{
	expandContent = true;
	selectedRow:string = '';
	coffeeRow = [{
		'id': '1',
		'Name': 'Starbucks',
		'Roast': 'Dark',
		'Format': 'K-pod',
		'expanded':false
	}, {
		'id': '2',
		'Name': 'Tim Hortons',
		'Roast': 'Dark',
		'Format': 'K-pod',
		'expanded':false
	}, {
		'id': '3',
		'Name': 'Dunkin',
		'Roast': 'Dark',
		'Format': 'K-pod',
		'expanded':false
	},
	]
	coffeeExpanded = [{
		'whoseData': '1',
		'datades': {
			'size': '32 oz',
			'grind': '15',
			'origin': 'Colombia'
		}
	}, {
		'whoseData': '2',
		'datades': {
			'size': '32 oz',
			'grind': '15',
			'origin': 'Mexico'
		}
	}, {
		'whoseData': '3',
		'datades': {
			'size': '32 oz',
			'grind': '15',
			'origin': 'Ecuador'
		}
	}
	]

	coffeeData! : Coffee[];

	ngOnInit() {
		// this.coffeeData = this.coffeeService.getAllCoffee();
		//
		// console.log(this.coffeeData);
		this.coffeeHttp.getAllCoffees().subscribe(
			{next:(data)=>{
				this.coffeeData = data;
				console.log(this.coffeeData);
			}
			})

	}

	constructor(private coffeeService: CoffeeDataService, private coffeeHttp: CoffeeHttpService) {
	}

	findDetails(data:any){
		return this.coffeeExpanded.filter(x=>x.whoseData==data.id);
	}

expanded: boolean =false;
	checkExpanded(data:any){
		if(this.expanded) {
			this.iDFromTable.emit(data.id);
			console.log('Index: ' + data.id);
		}else{
			this.iDFromTable.emit('');
		}
		return this.expanded;
	}

	@Output() iDFromTable = new EventEmitter<string>();

}
