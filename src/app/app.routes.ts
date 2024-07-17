import {AddUpdateFormComponent} from "./add-update-form/add-update-form.component";
import { DetailsComponent } from "./details/details.component";

export const routerStates = [
	{
		name: 'add-update-form',
		url: '/add-update-form',
		component: AddUpdateFormComponent,
		label: 'Add or Update Form',
	},
	{
		name: 'details',
		url: '/details',
		component: DetailsComponent,
		label: 'Details View',
	}
]
