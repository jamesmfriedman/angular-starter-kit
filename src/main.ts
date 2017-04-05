import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode} from '@angular/core';
import { bootloader } from '@angularclass/hmr';
import { AppModule } from './app/app.module';

// enable HMR in dev mode
if (/dev/.test(process.env.BUILD_ENV)) {
	bootloader(() => {
		return platformBrowserDynamic().bootstrapModule(AppModule);
	});
} 

// production mode
else {
	enableProdMode();
	platformBrowserDynamic().bootstrapModule(AppModule);	
}

