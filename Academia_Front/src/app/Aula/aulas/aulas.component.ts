import { Component, OnInit } from '@angular/core';
import { AulasServiceService } from 'src/app/Servicios/aulas-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aulas',
  templateUrl: './aulas.component.html',
  styleUrls: ['./aulas.component.css']
})
export class AulasComponent implements OnInit {

  aulas: any[];

  constructor(private aulasService: AulasServiceService,
              private router: Router) { }

  ngOnInit() {
    this.getAulas();
  }

  /*
  *Función que obtiene todos las aulas de la bbdd
  */
  getAulas(): void {
    this.aulasService.getAulas().subscribe(
      data => {
        this.aulas = data['_embedded'].aulas;
        // // console.log(this.aulas);
      }
    )
  }

  /*
  *Función que elimina una de las aulas de la bbdd
  */
  borrarAula(id: number): void {
    this.aulasService.borrarAula(id).subscribe(
      data => {
        this.router.navigate([`/aula`]);
        this.getAulas();
        // location.reload();
      }
    )
  }

  /*
  *Función que muestra los detalles de un aula
  */
  verAula(id: number): void {
    // this.router.navigate([`aula/detalles/${id}`]);
    location.assign(`aula/detalles/${id}`);
  }

  /*
  *Función que dirige al apartado welcome
  */
  volver(): void {
    this.router.navigate([`/welcome`]);
    // location.assign('welcome');
  }

}
