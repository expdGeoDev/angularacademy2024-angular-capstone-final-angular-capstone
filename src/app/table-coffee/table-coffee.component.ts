import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgClass, NgForOf, NgIf, NgSwitch, NgSwitchCase } from '@angular/common';
import { Coffee, FormType } from '../common/coffee-model';
import { CoffeeHttpService } from '../services/coffee-http.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { CoffeeFormComponent } from '../coffee-form/coffee-form.component';
import { DeleteCoffeeComponent } from '../delete-coffee/delete-coffee.component';
import { DetailsViewCoffeeComponent } from '../details-view-coffee/details-view-coffee.component';
import { map } from 'rxjs';

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
		NgSwitch,
		DetailsViewCoffeeComponent,
	],
  templateUrl: './table-coffee.component.html',
  styleUrl: './table-coffee.component.css'
})
export class TableCoffeeComponent implements OnInit{

	FormType = FormType

	p=0;
	coffeeRow?:Coffee;
	coffeeData! : Coffee[];
	optionModal: number = 0;
	title: any;

	constructor(
		private coffeeHttp: CoffeeHttpService
	) {}

	ngOnInit() {

		this.coffeeHttp.getAllCoffees().pipe(
			map(c =>
				c.filter( r => r.active )
			)
		).subscribe(
				{next:(data)=>{
					this.coffeeData = data;
					this.coffeeData.sort((a, b) =>
						a.id < b.id ? -1 : 1
					);
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

	getDetailsFromCoffee(data:Coffee, option:number){

		const modelDiv= document.getElementById('myModalDetails');
		if(modelDiv){
			modelDiv.style.display='block';
		}

		let idValue = +data.id;
		this.coffeeRow =  this.getDetailsById(idValue);
		this.optionModal = option;
	}

	closeModal(){

		const modelDiv= document.getElementById('myModalDetails');
		if(modelDiv){
			modelDiv.style.display='none';
		}
	}

	getDetailsById(id:number){

		const el = this.coffeeData.find(x=>x.id===id);
		console.log(el);
		return this.coffeeData.find(x=>x.id===id);
	}

	@Output() iDFromTable = new EventEmitter<string>();

}
