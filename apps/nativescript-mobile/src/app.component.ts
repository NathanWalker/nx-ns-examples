import { Component } from '@angular/core';
import { isIOS } from '@nativescript/core';
import { platformLog } from '@nxplatform/nativescript-utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  constructor() {
    platformLog(`Hi from a direct ${isIOS ? 'iOS' : 'Android'} log message.`);
    platformLog(`We can custom tag them too like this.`, 'my-log-tag');
  }
}
