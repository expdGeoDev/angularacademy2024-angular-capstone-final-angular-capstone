import { Component } from '@angular/core';
import { UIRouterModule } from '@uirouter/angular';
import { TableCoffeeComponent } from './table-coffee/table-coffee.component';
import { DeleteCoffeeComponent } from './delete-coffee/delete-coffee.component';
import { CoffeeFormComponent } from './coffee-form/coffee-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
	imports: [UIRouterModule, TableCoffeeComponent, DeleteCoffeeComponent, CoffeeFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-capstone';

	option = '';

	openModal(){
		const modelDiv= document.getElementById('myModal');
		if(modelDiv != null){
			modelDiv.style.display='block';
			this.option = 'Delete Item';
		}
	}

	closeModal(){
		const modelDiv= document.getElementById('myModal');
		if(modelDiv != null){
			modelDiv.style.display='none';
		}
	}

}
