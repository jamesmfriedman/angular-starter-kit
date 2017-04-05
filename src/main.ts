import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode} from '@angular/core';
import { bootloader } from '@angularclass/hmr';
import { AppModule } from './app/app.module';

export function main() {
	if (process.env.NODE_ENV === 'prod') {
		enableProdMode();
	}

  	return platformBrowserDynamic().bootstrapModule(AppModule);
}

// boot on document ready
bootloader(main);