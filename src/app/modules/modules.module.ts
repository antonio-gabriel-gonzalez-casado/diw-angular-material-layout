import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';


@NgModule({
  declarations: [
    HomeComponent,
    RegistrationComponent
    
  ],
  imports: [
    CommonModule
  ],
  exports: [

  ]
})
export class ModulesModule { }
