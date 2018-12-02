import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { DocentesService } from 'src/app/Servicios/docentes.service';

@Component({
  selector: 'app-crear-docente',
  templateUrl: './crear-docente.component.html',
  styleUrls: ['./crear-docente.component.css']
})
export class CrearDocenteComponent implements OnInit {

  creardocentes: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private docentesService: DocentesService) { }

  ngOnInit() {
    this.crearFormulario();
    }

  /*
  * Función que crea un formulario y sus funcionalidades
  */       
  crearFormulario(){ 
    this.creardocentes = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellidos: ['', Validators.required],
      email: ['', Validators.required],
      telefono: ['', Validators.required]
      }
    )
  }

  /*
  *Función que permite crear docentes e insertarlos a la base de datos
  */
  crearDocentes() {
    const nombre = this.creardocentes.value.nombre;
    const apellidos = this.creardocentes.value.apellidos;
    const email = this.creardocentes.value.email;
    const telefono = this.creardocentes.value.telefono;
    this.docentesService.crearDocente(nombre, apellidos, email, telefono).subscribe(
      data => {
        console.log(data);
        location.assign('docente');
      }
    )
  }
  
}
