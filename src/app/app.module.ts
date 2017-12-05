import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { PhotoInputModule } from './modules/photo-input/photo-input.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PhotoInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
