import { Component, OnInit } from '@angular/core';
import { MateriasService } from 'src/app/Servicios/materias.service';
import { Materias } from 'src/app/Modelos/Materias';

@Component({
  selector: 'app-materias',
  templateUrl: './materias.component.html',
  styleUrls: ['./materias.component.css']
})
export class MateriasComponent implements OnInit {

  materias: any[];
  
  constructor(private materiaService: MateriasService) { }

  ngOnInit() {
    this.getMaterias();
  }

  /*
  *Función que obtiene todas las materias de la bbdd
  */
  getMaterias(): void {
    this.materiaService.getMaterias().subscribe(
      data => {
        this.materias = data['_embedded'].materias;
        console.log(this.materias);
      }
    )
  }

  /*
  *Función que elimina una de las materias de la bbdd
  */
  borrarMateria(id: number): void {
    this.materiaService.borrarMateria(id).subscribe(
      data => {
        location.reload();
      }
    )
  }
  
  /*
  *Función que muestra los detalles de una materia
  */
  verMateria(id: number): void {
    location.assign(`materia/detalles/${id}`);
  }

  /*
  *Función que dirige al apartado welcome
  */
  volver(): void {
    location.assign('welcome');
  }
  
}
