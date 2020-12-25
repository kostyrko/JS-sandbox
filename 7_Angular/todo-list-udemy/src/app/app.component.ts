import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  config: { [key:string]: string} = null // przechowuje info o konfiguracji aplikacji
  constructor () {
    setTimeout(()=>{this.config =  { // przypisanie obiektu z odpowiednią konfiguracją
      title: 'Lista zadań',
      footer: ' Lista zadań zbudowana w Angularze',
      date : new Date().toDateString(),
    };},500)
    
  }
}
