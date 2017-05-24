import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdCardModule, MdInputModule } from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    MdCardModule,
    MdInputModule,
    NoopAnimationsModule
  ],
  exports: [
    MdCardModule,
    MdInputModule,
    NoopAnimationsModule
  ],
  declarations: []
})
export class MaterialModule { }
