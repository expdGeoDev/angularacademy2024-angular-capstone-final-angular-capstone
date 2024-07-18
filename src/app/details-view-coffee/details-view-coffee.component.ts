import { Component, Input} from '@angular/core';
import { JsonPipe, NgIf } from '@angular/common';
import { Coffee } from '../common/coffee-model';

@Component({
  selector: 'app-details-view-coffee',
  standalone: true,
	imports: [
		JsonPipe,
		NgIf,
	],
  templateUrl: './details-view-coffee.component.html',
  styleUrl: './details-view-coffee.component.css'
})
export class DetailsViewCoffeeComponent{
	@Input() dataRow?: Coffee;

	closeModal(){
		const modelDiv= document.getElementById('myModalDetails');
		if(modelDiv != null){
			modelDiv.style.display='none';
		}
	}

}
