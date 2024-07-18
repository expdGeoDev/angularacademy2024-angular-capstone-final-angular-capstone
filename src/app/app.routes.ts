import { Ng2StateDeclaration } from "@uirouter/angular";
import { CoffeeDeletedComponent } from './coffee-deleted/coffee-deleted.component';
import { AppComponent } from './app.component';

export const routes: Ng2StateDeclaration[] = [
	{
		name: 'home',
		url: '/home',
		component: AppComponent,
	},
	{
		name: 'coffeeDelete',
		url: '/coffee-delete',
		component: CoffeeDeletedComponent,
	}
];
