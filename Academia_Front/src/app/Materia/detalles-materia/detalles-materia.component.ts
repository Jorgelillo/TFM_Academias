import { Component, OnInit } from '@angular/core';
import { MateriasService } from 'src/app/Servicios/materias.service';
import { ActivatedRoute } from '@angular/router';
import { Materias } from 'src/app/Modelos/Materias';
import { DocentesService } from 'src/app/Servicios/docentes.service';

@Component({
  selector: 'app-detalles-materia',
  templateUrl: './detalles-materia.component.html',
  styleUrls: ['./detalles-materia.component.css']
})
export class DetallesMateriaComponent implements OnInit {

  materia: Materias;
  docentes: any[];

  constructor(private materiaService: MateriasService,
              private docentesService: DocentesService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.getMateria(id);
    this.getDocentesMateria(id);
  }

  /*
  *Función que obtiene una de las materias de la bbdd
  */
 getMateria(id: number): void {
  this.materia = new Materias();
  this.materiaService.getMateria(id).subscribe(
    data => {
      this.materia.id = id;
      this.materia.nombre = data.nombre;
      this.materia.nivel = data.nivel;
      }
    );
  }

  /*
  *Función que obtiene los docentes de una materia
  */
 getDocentesMateria(id: number): void {
  this.docentesService.getDocentesMateria(id).subscribe(
    data => {
      this.docentes = data['_embedded'].docentes;
      console.log(this.docentes);
    }
  )
}

}
