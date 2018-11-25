import { Component, OnInit } from '@angular/core';
import { Estudiantes } from 'src/app/Modelos/Estudiantes';
import { EstudiantesService } from 'src/app/Servicios/estudiantes.service';
import { MateriasService } from 'src/app/Servicios/materias.service';
import { ActivatedRoute } from '@angular/router';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-detalles-estudiante',
  templateUrl: './detalles-estudiante.component.html',
  styleUrls: ['./detalles-estudiante.component.css']
})
export class DetallesEstudianteComponent implements OnInit {


  mostrar: boolean;
  activarBoton: boolean;
  estudiante: Estudiantes;
  materias: any[];
  materiasRestantes: any[];
  modificarEstudiante: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private estudianteService: EstudiantesService,
              private materiasService: MateriasService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.getEstudiante(id);
    this.getMateriasEstudiante(id);
    this.getMateriasRestantesEstudiante(id);
    this.crearFormulario();
    this.mostrar = false;
  }

  crearFormulario(){ 
    this.modificarEstudiante = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellidos: ['', Validators.required],
      email: ['', Validators.required],
      telefono: ['', Validators.required]
    });
  }

  modificarEstudiantes(): void {
    const nombre = this.modificarEstudiante.value.nombre;
    const apellidos = this.modificarEstudiante.value.apellidos;
    const email = this.modificarEstudiante.value.email;
    const telefono = this.modificarEstudiante.value.telefono;
    this.estudianteService.modificarEstudiantes(this.estudiante.id, nombre, apellidos, email, telefono).subscribe(
      data => {
        console.log(data);
      }
    );
    location.assign(`estudiantes/detalles/${this.estudiante.id}`);
  }

  /*
  *Función que obtiene uno de los docentes de la bbdd
  */
 getEstudiante(id: number): void {
  this.estudiante = new Estudiantes();
  this.estudianteService.getEstudiante(id).subscribe(
    data => {
      this.estudiante.id = data.id;
      this.estudiante.nombre = data.nombre;
      this.estudiante.apellidos = data.apellidos;
      this.estudiante.email = data.email;
      this.estudiante.telefono = data.telefono;
      console.log(data);
      }
    );
  }

  /*
  *Función que obtiene las materias de un docente
  */
 getMateriasEstudiante(id: number): void {
  this.materiasService.getMateriasEstudiante(id).subscribe(
    data => {
      this.materias = data['_embedded'].materias;
      console.log(this.materias);
      }
    )
  }

    /*
  *Función que obtiene todas las materias de la bbdd
  */
 getMateriasRestantesEstudiante(id: number): void {
  this.materiasService.getMateriasRestantesEstudiante(id).subscribe(
    data => {
      this.materiasRestantes = data;
      console.log(this.materiasRestantes);
      if(this.materiasRestantes.length !== 0){
        this.activarBoton = true;
       } else {
        this.activarBoton = false;
      }
    }
  )
}

  mostrarMaterias(): void {
    if (this.mostrar) {
      this.mostrar = false;
    } else {
      this.mostrar = true;
    }
  }

  verMateria(id: number): void {
    location.assign(`materias/detalles/${id}`);
  }

  addMateria(id: number): void {
    this.estudianteService.addMateria(this.estudiante.id, id).subscribe(
      data => {
        console.log('Id docente ' + this.estudiante.id);
        console.log('Id materia ' + id);
        console.log(data);
      }
    );
   location.reload();
  }

  borrarMateria(id: number): void {
    this.estudianteService.borrarMateria(this.estudiante.id, id).subscribe(
      data => {
        console.log('Id docente ' + this.estudiante.id);
        console.log('Id materia ' + id);
        console.log(data);
      }
    );
    location.reload();
  }

}

