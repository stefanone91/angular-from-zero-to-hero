import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

// To load config from remote source:
// 1 - uncomment the following code and comment the original one
// 2 - convert appConfig from const to function with loaded config as parameter
// 3 - provide ConfigService provider by passing the loaded config into its constructor
// fetch("/assets/config.json")
//     .then(response => response.json())
//     .then(config => bootstrapApplication(AppComponent, appConfig(config)))
//     .catch(err => console.error(err));

bootstrapApplication(AppComponent, appConfig).catch(err => console.error(err));
