import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Contacts App';
  message = '';
  someProperty: any;

  onButtonClick() {
    console.log('Heippa');
    this.message = 'Heippa';
  }
}
