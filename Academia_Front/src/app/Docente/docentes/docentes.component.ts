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
    this.getDocentes();
  }

  /*
  *Función que obtiene todos los docentes de la bbdd
  */
 getDocentes(): void {
    this.docentesService.getDocentes().subscribe(
      data => {
        this.docentes = data['_embedded'].docentes;
        console.log(this.docentes);
      }
    )
  }
  
  /*
  *Función que elimina uno de los docentes de la bbdd
  */
  borrarDocente(id: number): void {
    this.docentesService.borrarDocente(id).subscribe(
      data => {
        location.reload();
      }
    )
  }
  /*
  *Función que muestra los detalles de un docente
  */
  verDocente(id: number): void {
    location.assign(`docentes/detalles/${id}`);
  }

  /*
  *Función que dirige al apartado welcome
  */
  volver(): void {
    location.assign('welcome');
  }
  
}