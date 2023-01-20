import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found/not-found.component';
import { NavComponent } from './nav/nav.component';
import { AppRoutingModule } from '../app-routing.module';
import { MaterialModule } from '../material.module';



@NgModule({
  declarations: [
    NotFoundComponent,
    NavComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    MaterialModule
  ],
  exports: [
    NotFoundComponent,
    NavComponent
  ]
})
export class SharedModule { }
