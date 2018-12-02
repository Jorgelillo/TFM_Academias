import { Component, OnInit } from '@angular/core';
import { MateriasService } from 'src/app/Servicios/materias.service';
import { ActivatedRoute } from '@angular/router';
import { Materias } from 'src/app/Modelos/Materias';
import { DocentesService } from 'src/app/Servicios/docentes.service';
import { EstudiantesService } from 'src/app/Servicios/estudiantes.service';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { AulasServiceService } from 'src/app/Servicios/aulas-service.service';
import { HorariosService } from 'src/app/Servicios/horarios.service';

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
  aulas: any[];
  aula: any[];
  estudiantesRestantes: any[];
  horariosMateria: any[];
  activarBotonDoc: boolean;
  activarBotonEst: boolean;
  mostrarDoc: boolean;
  mostrarEst: boolean;
  modificarMateria: FormGroup;
  horarioAula: FormGroup;
  actualizarAula: FormGroup;


  constructor(private formBuilder: FormBuilder,
              private formBuider2: FormBuilder,
              private formBuider3: FormBuilder,
              private materiaService: MateriasService,
              private docentesService: DocentesService,
              private estudiantesService: EstudiantesService,
              private aulasService: AulasServiceService,
              private horariosService: HorariosService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.getAulas();
    this.getMateria(id);
    this.getDocentesMateria(id);
    this.getDocentesRestantes(id);
    this.getEstudiantesMateria(id);
    this.getEstudiantesRestantes(id);
    this.crearFormularioModificar();
    this.crearFormularioHorarios();
    this.crearFormularioActualizarHorarios()
    this.getHorario(id);
  }

  /**
  * Función que crea un formulario y sus funcionalidades
  */
  crearFormularioModificar(){ 
    this.modificarMateria = this.formBuilder.group({
      nombre: ['', Validators.required],
      nivel: ['', Validators.required],
      grupo: ['', Validators.required]
      }
    );
  }

  /**
  * Función que crea un formulario y sus funcionalidades
  */
  crearFormularioHorarios(){ 
      this.horarioAula = this.formBuider2.group({
        horario: ['', Validators.required],
        selectAulas: ['', Validators.required]
      }
    )
  }

  /**
  * Función que crea un formulario y sus funcionalidades
  */
  crearFormularioActualizarHorarios(){ 
    this.actualizarAula = this.formBuider3.group({
      horario: ['', Validators.required],
      selectAulas: ['', Validators.required]
    });
  }

  /**
  * Función que permite modificar los detalles de una materia a través del formulario destinado a ello
  */
  modificarMaterias(): void {
    const nombre = this.modificarMateria.value.nombre;
    const nivel = this.modificarMateria.value.nivel;
    const grupo = this.modificarMateria.value.grupo;
    this.materiaService.modificarMaterias(this.materia.id, nombre, nivel, grupo).subscribe(
      data => {
        console.log(data);
      }
    );
    location.assign(`materia/detalles/${this.materia.id}`);
  }

  /**
  * Función que añade datos a la tabla horarios. Relaciona un aula,una materia y un horario
  */
  horarioAulas(): void {
    const horarios = this.horarioAula.value.horario;
    const selectAulas = this.horarioAula.value.selectAulas;
    const aulas = `/${selectAulas}`
    const materias = `/${this.materia.id}`
    this.horariosService.setHorarios(horarios, materias, aulas).subscribe(
      data => {
        console.log(data);
      }
    );
    location.assign(`materia/detalles/${this.materia.id}`);
  }

  /**
  * Función que permite actualizar un horario de una materia
  */
  actualizarHorarios(): void {
    const horarios = this.actualizarAula.value.horario;
    const selectAulas = this.actualizarAula.value.selectAulas;
    console.log(horarios);
    console.log(selectAulas);
    const aulas = `http://localhost:4200/aula/${selectAulas}`;
    const horarioId = this.horariosMateria[0].id;
    this.horariosService.actualizarHorarios(horarioId, horarios, aulas).subscribe(
      data => {
        console.log(data);
      }
    );
    location.assign(`materia/detalles/${this.materia.id}`);
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
        this.materia.grupo = data.grupo;
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

  /**
  * Función que muestra o no unos docentes segun un variable boolean
  */
  mostrarDocentes(): void {
    if (this.mostrarDoc) {
      this.mostrarDoc = false;
    } else {
      this.mostrarDoc = true;
    }
  }

  /**
  * Función que redirige a los detalles de un docente
  */
  verDocente(id: number): void {
    location.assign(`docente/detalles/${id}`);
  }

  /**
  * Función que permite la relacion entre un docente y una materia
  */
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

  /**
  * Función que permite añadir un docente a una materia
  */
  addDocente(idDocente: number): void {
    this.docentesService.addMateria(idDocente, this.materia.id).subscribe(
      data => {
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

  /**
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

  /**
  * Función que muestra o no los estudiantes de una materia según una variable boolean
  */
  mostrarEstudiantes(): void {
    if (this.mostrarEst) {
      this.mostrarEst = false;
    } else {
      this.mostrarEst = true;
    }
  }

  /**
  * Función que muestra los detalles del estudiante al que se le da click
  */
  verEstudiante(id: number): void {
    location.assign(`estudiante/detalles/${id}`);
  }

  /**
  * Función que borra la relacion de una materia y un estudiante
  */

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

  /**
  * Función que matricula un estudiante a una materia
  */
  addEstudiante(idEstudiante: number): void {
    this.estudiantesService.addMateria(idEstudiante, this.materia.id).subscribe(
      data => {
        console.log(data);
      }
    );
    location.reload();
  }

  /**
  * Función que obtiene todas las aulas de la base de datos
  */
  getAulas(): void {
    this.aulasService.getAulas().subscribe(
      data => {
        this.aulas = data['_embedded'].aulas;
        console.log(this.aulas);
      }
    );
  }

  /**
  * Función que obtiene el horario de un aula
  */
  getHorario(id: number): void {
    this.horariosService.getHorarioAula(id).subscribe(
      data => {
        this.horariosMateria = data['_embedded'].horarios;
        console.log(this.horariosMateria);
        if( this.horariosMateria[0]) {
        const url = this.horariosMateria[0]['_links'].aulas.href;
        this.getAula(url);
        }
        // console.log(this.horariosMateria[0]['_links'].aulas.href);
      }
    );
  }

  /**
  * Función que recoge los detalles de un aula
  */
  getAula(url: string): void {
    this.aulasService.getAulaHorario(url).subscribe(
      data => {
        console.log(data);
        this.aula = data;
      }
    );
  }

}
