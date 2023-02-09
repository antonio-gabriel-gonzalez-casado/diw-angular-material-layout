/**
 * @class Person
 * Contiene los datos del formulario para registar una persona
 */
export class Person {

    constructor(
      public id: number,
      public firstName: string,
      public lastName: string,
      public email: string, 
      public size: string,
      public runningClub?:string
    ) {  }
  
  }