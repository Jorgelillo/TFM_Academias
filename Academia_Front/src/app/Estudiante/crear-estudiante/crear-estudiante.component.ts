import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { EstudiantesService } from 'src/app/Servicios/estudiantes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-estudiante',
  templateUrl: './crear-estudiante.component.html',
  styleUrls: ['./crear-estudiante.component.css']
})

export class CrearEstudianteComponent implements OnInit {

  crearEstudiante: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private estudiantesService: EstudiantesService,
              private router: Router) { }

  ngOnInit() {
    this.crearFormulario();
    }

  /**
  * Función que crea un formulario y sus funcionalidades
  */
  crearFormulario(){ 
    this.crearEstudiante = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellidos: ['', Validators.required],
      email: ['', Validators.required],
      telefono: ['', Validators.required]
    });
  }

  /**
  * Función que permite crear un formulario e introducirlo en la base de datos
  */
  crearEstudiantes() {
    const nombre = this.crearEstudiante.value.nombre;
    const apellidos = this.crearEstudiante.value.apellidos;
    const email = this.crearEstudiante.value.email;
    const telefono = this.crearEstudiante.value.telefono;
    this.estudiantesService.crearEstudiante(nombre, apellidos, email, telefono).subscribe(
      data => {
        // console.log(data);
        this.router.navigate([`/estudiante`]);
        // location.assign('estudiante');
      }
    )
  }
  
}

