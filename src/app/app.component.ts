import { Component } from '@angular/core';
import { routerStates } from "./app.routes";
import { UIRouterModule } from "@uirouter/angular";
import { HeaderComponent } from './header/header.component';
import { UtilitybarComponent } from './utilitybar/utilitybar.component';
import { CoffeelistComponent } from './coffeelist/coffeelist.component';
import { TestcomponentComponent } from './testcomponent/testcomponent.component';


@Component({
	selector: 'app-root',
	standalone: true,
	templateUrl: './app.component.html',
	imports: [
		UIRouterModule,
		HeaderComponent,
		UtilitybarComponent,
		CoffeelistComponent,
		TestcomponentComponent,
	],
	styleUrl: './app.component.css',
})

export class AppComponent {
  protected readonly routerStates = routerStates;
}
