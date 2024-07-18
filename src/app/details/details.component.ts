import { Component } from '@angular/core';
import { Coffee } from '../../data/coffee-data';
import { CoffeeHttpService } from '../coffee-http.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})

export class DetailsComponent {

  @Input() coffeeId: String = '0';

  beans: Observable<Coffee[]> | undefined;

  constructor(private coffeeHTTPService: CoffeeHttpService){}
  myCoffee: Coffee[] | undefined ;
  ngOnInit(){
    
    this.beans = this.coffeeHTTPService.getAllBeans();
  }

}
