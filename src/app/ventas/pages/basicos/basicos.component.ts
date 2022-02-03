import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

nombreLower: string = 'felipe';
nombreUpper: string = 'FELIPE';
nombreCompleto: string = 'fElIpe rEyEs';
 
fecha: Date = new Date(); //Fecha de hoy
}
