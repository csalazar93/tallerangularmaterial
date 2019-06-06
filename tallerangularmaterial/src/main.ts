import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import 'hammerjs'

//Arreglar error con hammer (una opción)
//Link: https://stackoverflow.com/questions/39496267/module-not-found-error-cant-resolve-hammerjs
//Otra opcion: ng update @angular/material para quitar los warnings

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
