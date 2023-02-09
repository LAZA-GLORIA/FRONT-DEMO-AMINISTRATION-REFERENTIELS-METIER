import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
  ],
  exports: [
    SharedModule,
    BrowserAnimationsModule,
  ]
})
export class CoreModule { }
