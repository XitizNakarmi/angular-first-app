import {Component} from '@angular/core';

@Component({
  selector: 'pm-root',
  templateUrl: 'app.component.html'
  // template: `
  //   <div>
  //     <h1>{{pageTitle}}</h1>
  //     <div>My first component</div>
  //   </div>
  //
  // `
})
export class AppComponent{
  pageTitle: string = 'My first app';
}
