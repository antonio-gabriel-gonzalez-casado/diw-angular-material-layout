import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../core/material/material.module';
import { RegistrationModule } from './registration/registration.module';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RegistrationModule
  ],
  exports: [
    MaterialModule,
    RegistrationModule
  ]
})
export class ModulesModule { }
