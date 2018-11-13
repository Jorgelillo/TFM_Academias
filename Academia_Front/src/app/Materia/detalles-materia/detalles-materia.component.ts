import { Component, OnInit } from '@angular/core';
import { MateriasService } from 'src/app/Servicios/materias.service';
import { ActivatedRoute } from '@angular/router';
import { Materias } from 'src/app/Modelos/Materias';

@Component({
  selector: 'app-detalles-materia',
  templateUrl: './detalles-materia.component.html',
  styleUrls: ['./detalles-materia.component.css']
})
export class DetallesMateriaComponent implements OnInit {

  materia: Materias;

  constructor(private materiaService: MateriasService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.getMateria(id);
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
}
