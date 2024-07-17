import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgClass, NgForOf, NgIf } from '@angular/common';

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
export class TableCoffeeComponent {
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

	findDetails(data:any){
		return this.coffeeExpanded.filter(x=>x.whoseData==data.id);
	}


	checkExpanded(data:any){
		data.expanded = !data.expanded;
		if(data.expanded) {
			this.iDFromTable.emit(data.id);
			console.log('Index: ' + data.id);
		}else{
			this.iDFromTable.emit('');
		}
		return data.expanded;
	}

	@Output() iDFromTable = new EventEmitter<string>();

}
