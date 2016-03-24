import 'angular2/bundles/angular2-polyfills'
import 'rxjs/Rx';

import { bootstrap } from 'angular2/bootstrap';
import { Component } from 'angular2/core';

@Component({
	selector: 'my-app',
	template: '<span>It works</span>'
})
class MyApp {
	
}

bootstrap(MyApp);