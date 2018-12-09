import { Component, OnInit } from '@angular/core';
import { DocentesService } from 'src/app/Servicios/docentes.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-docentes',
  templateUrl: './docentes.component.html',
  styleUrls: ['./docentes.component.css']
})
export class DocentesComponent implements OnInit {

  docentes: any[];

  constructor(private docentesService: DocentesService,
              private router: Router) { }

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
        // console.log(this.docentes);
      }
    )
  }
  
  /*
  *Función que elimina uno de los docentes de la bbdd
  */
  borrarDocente(id: number): void {
    this.docentesService.borrarDocente(id).subscribe(
      data => {
        this.getDocentes();
        // location.reload();
      }
    )
  }
  
  /*
  *Función que muestra los detalles de un docente
  */
  verDocente(id: number): void {
    location.assign(`docente/detalles/${id}`);
  }

  /*
  *Función que dirige al apartado welcome
  */
  volver(): void {
    this.router.navigate([`/welcome`]);
    // location.assign('welcome');
  }
  
}