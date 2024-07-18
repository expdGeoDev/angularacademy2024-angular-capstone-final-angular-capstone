import { Component, ElementRef, NgModule, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../services/api.service';
import { NgForOf } from '@angular/common';
import { Coffee } from '../interface/coffee'
import { FormsModule } from '@angular/forms';
import { FilterPipe } from '../shared/filter.pipe';
import { UtilitybarComponent } from '../utilitybar/utilitybar.component';


@Component({
	selector: 'app-coffeelist',
	standalone: true,
	imports: [
		NgForOf,
		FormsModule,
		UtilitybarComponent,
		// FilterPipe,
	],
	// providers: [FilterPipe],
	templateUrl: './coffeelist.component.html',
	styleUrl: './coffeelist.component.css',
})

export class CoffeelistComponent implements OnInit {

	// @ViewChild('searchbar') searchbar: ElementRef | any;
	searchText = '';
	coffee: Coffee []=[];

	constructor(private apiService:ApiService) { }
	ngOnInit(): void {
		this.apiService.coffee().subscribe(response => {
			this.coffee = response;
			console.log(this.coffee);
		});
	}

}
