import { Ng2StateDeclaration } from "@uirouter/angular";
import { CoffeeDeletedComponent } from './coffee-deleted/coffee-deleted.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

export const routes: Ng2StateDeclaration[] = [
	{
		name: 'home',
		url: '/home',
		component: HomeComponent,
	},
	{
		name: 'coffeeDelete',
		url: '/coffee-delete',
		component: CoffeeDeletedComponent,
	}
];
