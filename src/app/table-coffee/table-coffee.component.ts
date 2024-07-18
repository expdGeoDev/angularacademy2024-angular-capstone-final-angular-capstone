import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AsyncPipe, NgClass, NgForOf, NgIf, NgSwitchCase } from '@angular/common';
import { CoffeeDataService } from '../services/coffee-data.service';
import { Coffee } from '../common/coffee-model';
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
		DetailsViewCoffeeComponent,
		AsyncPipe,
	],
  templateUrl: './table-coffee.component.html',
  styleUrl: './table-coffee.component.css'
})
export class TableCoffeeComponent implements OnInit{
	p=0;
	coffeeRow?:Coffee;

	coffeeData! : Coffee[];
	constructor(private coffeeService: CoffeeDataService, private coffeeHttp: CoffeeHttpService) {
	}
	ngOnInit() {
		// this.coffeeData = this.coffeeService.getAllCoffee();
		//
		// console.log(this.coffeeData);
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

	@Output() iDFromTable = new EventEmitter<string>();

}
