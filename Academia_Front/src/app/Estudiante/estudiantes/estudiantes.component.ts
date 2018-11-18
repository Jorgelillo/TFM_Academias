import { Component, OnInit } from '@angular/core';
import { EstudiantesService } from 'src/app/Servicios/estudiantes.service';

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.css']
})
export class EstudiantesComponent implements OnInit {

  estudiantes: any[];

  constructor(private estudiantesService: EstudiantesService) { }

  ngOnInit() {
    this.getEstudiantes();
  }

  /*
  *Función que obtiene todos los estudiantes de la bbdd
  */
 getEstudiantes(): void {
    this.estudiantesService.getEstudiantes().subscribe(
      data => {
        this.estudiantes = data['_embedded'].estudiantes;
        console.log(this.estudiantes);
      }
    )
  }
  /*
  *Función que obtiene uno de los estudiantes de la bbdd
  
  getEstudiante(id: number): void {
    this.estudiantesService.getEstudiante(id).subscribe(
      data => {
        console.log(data);
      }
    )
  }

  */
 
  /*
  *Función que elimina uno de los estudiantes de la bbdd
  */
  borrarEstudiante(id: number): void {
    this.estudiantesService.borrarEstudiante(id).subscribe(
      data => {
        location.reload();
      }
    )
  }
  /*
  *Función que muestra los detalles de un estudiante
  */
  verEstudiante(id: number): void {
    location.assign(`estudiantes/detalles/${id}`);
  }

  /*
  *Función que dirige al apartado welcome
  */
  volver(): void {
    location.assign('welcome');
  }
  
}