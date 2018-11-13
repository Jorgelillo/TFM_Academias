import { Component, OnInit } from '@angular/core';
import { DocentesService } from 'src/app/Servicios/docentes.service';


@Component({
  selector: 'app-docentes',
  templateUrl: './docentes.component.html',
  styleUrls: ['./docentes.component.css']
})
export class DocentesComponent implements OnInit {

  docentes: any[];

  constructor(private docentesService: DocentesService) { }

  ngOnInit() {
    this.getMaterias();
  }

  /*
  *Función que obtiene todas las materias de la bbdd
  */
  getMaterias(): void {
    this.docentesService.getDocentes().subscribe(
      data => {
        this.docentes = data['_embedded'].docentes;
        console.log(this.docentes);
      }
    )
  }
  /*
  *Función que obtiene una de las materias de la bbdd
  */
  getMateria(id: number): void {
    this.docentesService.getDocente(id).subscribe(
      data => {
        console.log(data);
      }
    )
  }
  /*
  *Función que elimina una de las materias de la bbdd
  */
  borrarMateria(id: number): void {
    this.docentesService.borrarDocente(id).subscribe(
      data => {
        location.reload();
      }
    )
  }
  /*
  *Función que muestra los detalles de una materia
  */
  verMateria(id: number): void {
    location.assign(`materias/detalles/${id}`);
  }

  /*
  *Función que dirige al apartado welcome
  */
  volver(): void {
    location.assign('welcome');
  }
  
}