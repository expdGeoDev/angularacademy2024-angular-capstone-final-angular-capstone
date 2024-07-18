import { Ng2StateDeclaration } from "@uirouter/angular";
import { CoffeeDeletedComponent } from './coffee-deleted/coffee-deleted.component';

export const routes: Ng2StateDeclaration[] = [
	{
		name: 'coffeeDelete',
		url: '/coffee-delete',
		component: CoffeeDeletedComponent,
	}
];
