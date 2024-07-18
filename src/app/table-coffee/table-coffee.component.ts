import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgClass, NgForOf, NgIf, NgSwitchCase } from '@angular/common';
import { CoffeeDataService } from '../services/coffee-data.service';
import { Coffee } from '../common/coffee-model';
import { CoffeeHttpService } from '../services/coffee-http.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { CoffeeFormComponent } from '../coffee-form/coffee-form.component';
import { DeleteCoffeeComponent } from '../delete-coffee/delete-coffee.component';
import { DetailsViewCoffeeComponent } from '../details-view-coffee/details-view-coffee.component';
import { SortingInterface } from '../sorting-interface';

@Component({
  selector: 'app-table-coffee',
  standalone: true,
	imports: [
		NgForOf,
		NgIf,
		NgClass,
		NgxPaginationModule,
		CoffeeFormComponent,
		DeleteCoffeeComponent,
		NgSwitchCase,
		DetailsViewCoffeeComponent,
	],
  templateUrl: './table-coffee.component.html',
  styleUrl: './table-coffee.component.css'
})
export class TableCoffeeComponent implements OnInit{
	p=0;
	coffeeRow?:Coffee;
	coffeeData! : Coffee[];
	sortIcon='▼'
	sorting:SortingInterface = {
		column:'Id',
		order:'desc'
}
	constructor(private coffeeService: CoffeeDataService, private coffeeHttp: CoffeeHttpService) {
	}
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

	getDetailsFromCoffee(data:any){
		const modelDiv= document.getElementById('myModalDetails');
		if(modelDiv != null){
			modelDiv.style.display='block';
		}
		//this.iDFromTable.emit(data.id);
		let idValue = +data.id;
		this.coffeeRow =  this.getDetailsById(idValue);
		console.log("Stop   "+ this.coffeeRow?.roaster);
		console.log('Id: '+data.id);
	}

	closeModal(){
		const modelDiv= document.getElementById('myModalDetails');
		if(modelDiv != null){
			modelDiv.style.display='none';
		}
	}

	getDetailsById(id:number){
		console.log(this.coffeeData.find(x=>x.id==id));
		return this.coffeeData.find(x=>x.id==id);
	}

	sortingColumn(column:string){
		if(this.sortIcon =='▼'){
			this.sortIcon= '▲';
			return this.sorting.column===column && this.sorting.order ==='desc'
		}else {
			this.sortIcon= '▼';
			return this.sorting.column===column && this.sorting.order ==='desc'
		}
	}

	fetchData(){
		this.coffeeHttp.getAllCoffees().subscribe(
			{next:(data)=>{
					this.coffeeData = data
					console.log(this.coffeeData);
				}
			})
	}


	@Output() iDFromTable = new EventEmitter<string>();

}
