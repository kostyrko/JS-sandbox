import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RightComponent } from './right/right/right.component';
import { LeftComponent } from './left/left/left.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    RightComponent,
    LeftComponent
  ],
  imports: [
    // importowanie FormsModule w celu 2 stronnego data bingingu
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
