import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { FormsModule } from '@angular/forms';
import { CoreModule } from '../core/core.module';



@NgModule({
  declarations: [
    HomeComponent,
    RegistrationComponent
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    CoreModule
  ],
  exports: [
    
  ]
})
export class ModulesModule { }
