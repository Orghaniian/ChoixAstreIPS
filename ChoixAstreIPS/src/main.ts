import { enableProdMode } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppModule } from "./app/app.module";

import { environment } from "./environments/environment";
import {appWindow, LogicalSize} from "@tauri-apps/api/window";

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule).catch(err => console.error(err));

// noinspection JSIgnoredPromiseFromCall
appWindow.setMinSize(new LogicalSize(940, 400));