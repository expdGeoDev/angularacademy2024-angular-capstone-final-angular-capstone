import { Component, OnInit } from '@angular/core';
import { NgForOf } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { Coffee } from '../common/coffee-model';
import { CoffeeHttpService } from '../services/coffee-http.service';

@Component({
  selector: 'app-coffee-deleted',
  standalone: true,
	imports: [
		NgForOf,
		NgxPaginationModule,
	],
  templateUrl: './coffee-deleted.component.html',
  styleUrl: './coffee-deleted.component.css'
})
export class CoffeeDeletedComponent implements OnInit{
	p=0;
	coffeeData! : Coffee[];
	constructor(private coffeeHttp: CoffeeHttpService) {
	}

	ngOnInit() {

		this.coffeeHttp.getAllCoffees().subscribe(
			{next:(data)=>{
					this.coffeeData = data;
					console.log(this.coffeeData);
				}
			})
	}

}
