import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoInputComponent } from './photo-input.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PhotoInputComponent],
  exports: [PhotoInputComponent]
})
export class PhotoInputModule { }
