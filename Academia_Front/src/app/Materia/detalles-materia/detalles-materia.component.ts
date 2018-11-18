import { Component, OnInit } from '@angular/core';
import { MateriasService } from 'src/app/Servicios/materias.service';
import { ActivatedRoute } from '@angular/router';
import { Materias } from 'src/app/Modelos/Materias';
import { DocentesService } from 'src/app/Servicios/docentes.service';
import { EstudiantesService } from 'src/app/Servicios/estudiantes.service';

@Component({
  selector: 'app-detalles-materia',
  templateUrl: './detalles-materia.component.html',
  styleUrls: ['./detalles-materia.component.css']
})
export class DetallesMateriaComponent implements OnInit {

  materia: Materias;
  docentesRestantes: any[];
  docentes: any[];
  estudiantes: any[];
  estudiantesRestantes: any[];
  activarBotonDoc: boolean;
  activarBotonEst: boolean;
  mostrarDoc: boolean;
  mostrarEst: boolean;

  constructor(private materiaService: MateriasService,
              private docentesService: DocentesService,
              private estudiantesService: EstudiantesService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.getMateria(id);
    this.getDocentesMateria(id);
    this.getDocentesRestantes(id);
    this.getEstudiantesMateria(id);
    this.getEstudiantesRestantes(id);
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
        this.activarBotonDoc = true;
       } else {
        this.activarBotonDoc = false;
      }
    }
  )
}

mostrarDocentes(): void {
  if (this.mostrarDoc) {
    this.mostrarDoc = false;
  } else {
    this.mostrarDoc = true;
  }
}

verDocente(id: number): void {
  location.assign(`docentes/detalles/${id}`);
}

borrarDocente(id: number): void {
  this.materiaService.borrarDocente(this.materia.id, id).subscribe(
    data => {
      console.log('Id docente ' + this.materia.id);
      console.log('Id materia ' + id);
      console.log(data);
    }
  );
  location.reload();
}

    /*
    *Función que obtiene los docentes de una materia
    */
  getEstudiantesMateria(id: number): void {
    this.estudiantesService.getMateriasEstudiantes(id).subscribe(
      data => {
        this.estudiantes = data['_embedded'].estudiantes;
        console.log(this.estudiantes);
      }
    )
  }

      /*
    *Función que obtiene todas las materias de la bbdd
    */
  getEstudiantesRestantes(id: number): void {
    this.estudiantesService.getEstudiantesRestantes(id).subscribe(
      data => {
        this.estudiantesRestantes = data;
        if(this.estudiantesRestantes.length !== 0){
          this.activarBotonEst = true;
        } else {
          this.activarBotonEst = false;
        }
      }
    )
  }

  mostrarEstudiantes(): void {
    if (this.mostrarEst) {
      this.mostrarEst = false;
    } else {
      this.mostrarEst = true;
    }
  }

  verEstudiante(id: number): void {
    location.assign(`estudiantes/detalles/${id}`);
  }

borrarEstudiante(id: number): void {
  this.materiaService.borrarEstudiante(this.materia.id, id).subscribe(
    data => {
      console.log('Id Estudiante ' + this.materia.id);
      console.log('Id materia ' + id);
      console.log(data);
    }
  );
  location.reload();
}

}
