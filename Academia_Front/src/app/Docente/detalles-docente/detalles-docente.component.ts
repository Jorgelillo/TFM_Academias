import { Component, OnInit } from '@angular/core';
import { Docentes } from 'src/app/Modelos/Docentes';
import { DocentesService } from 'src/app/Servicios/docentes.service';
import { ActivatedRoute } from '@angular/router';
import { MateriasService } from 'src/app/Servicios/materias.service';

@Component({
  selector: 'app-detalles-docente',
  templateUrl: './detalles-docente.component.html',
  styleUrls: ['./detalles-docente.component.css']
})
export class DetallesDocenteComponent implements OnInit {

  docente: Docentes;
  materias: any[];

  constructor(private docentesService: DocentesService,
              private materiasService: MateriasService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.getDocente(id);
    this.getMateriasDocentes(id);
  }

  /*
  *Función que obtiene uno de los docentes de la bbdd
  */
 getDocente(id: number): void {
  this.docente = new Docentes();
  this.docentesService.getDocente(id).subscribe(
    data => {
      this.docente.id = data.id;
      this.docente.nombre = data.nombre;
      this.docente.apellidos = data.apellidos;
      this.docente.email = data.email;
      this.docente.telefono = data.telefono;
      console.log(data);
      }
    );
  }

  /*
  *Función que obtiene las materias de un docente
  */
 getMateriasDocentes(id: number): void {
  this.materiasService.getMateriasDocentes(id).subscribe(
    data => {
      this.materias = data['_embedded'].materias;
      console.log(this.materias);
    }
  )
}
