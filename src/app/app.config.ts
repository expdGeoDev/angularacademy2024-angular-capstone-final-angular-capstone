import {ApplicationConfig, importProvidersFrom} from '@angular/core';

import {provideHttpClient, withFetch} from '@angular/common/http';
import { UIRouter, UIRouterModule } from '@uirouter/angular';
import { routes } from './app.routes';
import { Visualizer } from '@uirouter/visualizer';


function setupUIRouterConfig(router: UIRouter) {
	// Adds the visualizer
	router.plugin(Visualizer);
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withFetch()),
    importProvidersFrom(
      UIRouterModule.forRoot({
				states: routes
			})
    ),
  ],
};
