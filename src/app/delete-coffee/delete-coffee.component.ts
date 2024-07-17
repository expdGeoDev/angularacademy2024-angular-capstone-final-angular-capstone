import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-delete-coffee',
  standalone: true,
  imports: [],
  templateUrl: './delete-coffee.component.html',
  styleUrl: './delete-coffee.component.css'
})
export class DeleteCoffeeComponent {
	@Input() title?: string;
}
