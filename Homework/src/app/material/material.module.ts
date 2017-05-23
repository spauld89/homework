import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdCardModule, MdInputModule, MdSelectModule } from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    MdCardModule,
    MdInputModule,
    MdSelectModule,
    NoopAnimationsModule
  ],
  exports: [
    MdCardModule,
    MdInputModule,
    MdSelectModule,
    NoopAnimationsModule
  ],
  declarations: []
})
export class MaterialModule { }
