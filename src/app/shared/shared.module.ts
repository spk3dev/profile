import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing/app-routing.module'
import { LayoutComponent } from './component/layout/layout.component';



@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports : [LayoutComponent]
})
export class SharedModule { }
