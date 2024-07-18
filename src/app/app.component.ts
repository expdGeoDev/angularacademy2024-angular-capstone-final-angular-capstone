import { Component } from '@angular/core';
import {routerStates} from "./app.routes";
import {UIRouterModule} from "@uirouter/angular";

@Component({
	selector: 'app-root',
	standalone: true,
	templateUrl: './app.component.html',
	imports: [
		UIRouterModule
	],
	styleUrl: './app.component.css'
})
export class AppComponent {
  protected readonly routerStates = routerStates;
}
