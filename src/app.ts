import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { removeNgStyles, createNewHosts, bootloader, createInputTransfer } from '@angularclass/hmr';
import { AppComponent } from './app/app.component';

@NgModule({
	imports:      [ BrowserModule ],
	declarations: [ AppComponent ],
	bootstrap:    [ AppComponent ]
})
export class AppModule {
	constructor(public appRef: ApplicationRef) {}
	hmrOnInit(store) {
		if (!store || !store.state) return;
		console.log('HMR store', store);
		console.log('store.state.data:', store.state.data)
		// inject AppStore here and update it
		// this.AppStore.update(store.state)
		if ('restoreInputValues' in store) {
		  store.restoreInputValues();
		}
		// change detection
		this.appRef.tick();
		delete store.state;
		delete store.restoreInputValues;
	}
	hmrOnDestroy(store) {
		var cmpLocation = this.appRef.components.map(cmp => cmp.location.nativeElement);
		// recreate elements
		store.disposeOldHosts = createNewHosts(cmpLocation)
		// save input values
		store.restoreInputValues  = createInputTransfer();
		// remove styles
		removeNgStyles();
	}
	hmrAfterDestroy(store) {
		// display new elements
		store.disposeOldHosts()
		delete store.disposeOldHosts;
		// anything you need done the component is removed
	}
}

export function main() {
  return platformBrowserDynamic().bootstrapModule(AppModule);
}

// boot on document ready
bootloader(main);