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
  docentesRestantes: any[];
  docentes: any[];
  activarBoton: boolean;
  mostrar: boolean;

  

  constructor(private materiaService: MateriasService,
              private docentesService: DocentesService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.getMateria(id);
    this.getDocentesMateria(id);
    this.getDocentesRestantes(id);
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

    /*
  *Función que obtiene todas las materias de la bbdd
  */
 getDocentesRestantes(id: number): void {
  this.docentesService.getDocentesRestantes(id).subscribe(
    data => {
      this.docentesRestantes = data;
      if(this.docentesRestantes.length !== 0){
        this.activarBoton = true;
       } else {
        this.activarBoton = false;
      }
    }
  )
}

mostrarDocentes(): void {
  if (this.mostrar) {
    this.mostrar = false;
  } else {
    this.mostrar = true;
  }
}

}
