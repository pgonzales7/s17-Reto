import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form/form.component';
import { TableComponent } from './table/table.component';
import { TableFilterComponent } from './table-filter/table-filter.component';
import { MaterialModule } from '../material.module';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    FormComponent,
    TableComponent,
    TableFilterComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  exports: [
    FormComponent,
    TableComponent,
    TableFilterComponent,
    HomeComponent
  ]
})
export class ComponentsModule { }
