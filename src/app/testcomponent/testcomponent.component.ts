import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { Coffee } from '../interface/coffee';
import { ApiService } from '../services/api.service';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { PopupComponent} from '../popup/popup.component';
// import { RouterModule, Routes } from '@angular/router';
// import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-testcomponent',
  standalone: true,
	imports: [
		HeaderComponent,
		NgForOf,
		FormsModule,
		PopupComponent,
	],
  templateUrl: './testcomponent.component.html',
  styleUrl: './testcomponent.component.css'
})

export class TestcomponentComponent implements OnInit {

	stage: Coffee []=[];
	coffee: Coffee []=[];
	selectedOption : string = '';
	count: any;
	delFlag : boolean = true;

	sortingoptions: string[] = ['Brand (A-Z)', 'Brand (Z-A)'];

	constructor(private apiService:ApiService, private http: HttpClient) { }
	ngOnInit(): void {
		this.apiService.coffee().subscribe(response => {
			this.coffee = response;
			// this.coffee  = this.coffee.filter(o => o.active);
			this.count = this.coffee.length;
			// this.coffee = this.coffee.sort((a, b) => a.id> b.id? 1 : -1);
		});
	}

	onSortChange() {
		let colname = '';
		let sortype = '';

		if (this.selectedOption == 'Brand (A-Z)') {
			colname = 'roaster';
			sortype = 'asc'
		}
		else if (this.selectedOption == 'Brand (Z-A)') {
			colname = '-roaster';
			sortype = 'desc'
		}
			this.apiService.sort(colname,sortype).subscribe(response => {
			this.coffee = response;
		});
	}

	clickView(id : any) {
	}

	clickEdit(id : any) {
	}

	clickDelete(cid : any) {

		if(this.delFlag) {
			const todelete = this.coffee.filter(obj => obj.id == cid)
			var data = {
				id: cid,
				active: true,
				variety: todelete[0].variety,
				size: todelete[0].size,
				roast: todelete[0].roast,
				roaster: todelete[0].roaster,
				format: todelete[0].format,
				grind: todelete[0].grind,
				origin: todelete[0].origin,
				singleOrigin: todelete[0].singleOrigin,
				tastingNotes: todelete[0].tastingNotes,
			}
			this.apiService.deleteCoffee(data, cid).subscribe(response => {
				console.log(response.observer);
				// setTimeout(() => window.location.reload(), 1000);
			});
		}
	}

	getdeleteflag(deleteFlag : boolean) {
		this.delFlag = deleteFlag;
	}


}
