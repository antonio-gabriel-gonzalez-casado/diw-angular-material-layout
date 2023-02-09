import { Component } from '@angular/core';
import {Person} from './person.model';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {
  // Tallas para el atributo size el modelo Person
  sizes = ['XS', 'S', 'M', 'L', 'XL'];

  // Datos de ejemplo para la persona
  model = new Person(1, "Antonio Gabriel", "González Casado", "prof.antoniogabriel@iesalixar.org", this.sizes[2], "CAIRS");

  // Formulario enviado por defecto a falso
  submitted = false;

  // Una vez que el formulario está enviado entonces se establece a enviado.
  onSubmit() { this.submitted = true; }

  // Función para inicializar una nueva persona:

  newPerson () {
    this.model = new Person(2,"","","","");
  };

}
