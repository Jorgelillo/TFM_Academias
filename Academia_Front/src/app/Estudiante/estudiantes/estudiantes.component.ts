import { Component, OnInit } from '@angular/core';
import { EstudiantesService } from 'src/app/Servicios/estudiantes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.css']
})
export class EstudiantesComponent implements OnInit {

  estudiantes: any[];

  constructor(private estudiantesService: EstudiantesService,
              private router: Router) { }

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
          // console.log(this.estudiantes);
        }
      )
    }

  /*
  *Función que elimina uno de los estudiantes de la bbdd
  */
  borrarEstudiante(id: number): void {
    this.estudiantesService.borrarEstudiante(id).subscribe(
      data => {
        this.getEstudiantes();
        // location.reload();
      }
    )
  }
  
  /*
  *Función que muestra los detalles de un estudiante
  */
  verEstudiante(id: number): void {
    location.assign(`estudiante/detalles/${id}`);
  }

  /*
  *Función que dirige al apartado welcome
  */
  volver(): void {
    this.router.navigate([`/welcome`]);
    // location.assign('welcome');
  }
  
}