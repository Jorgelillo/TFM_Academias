import { Component, OnInit } from '@angular/core';
import { Docentes } from 'src/app/Modelos/Docentes';
import { DocentesService } from 'src/app/Servicios/docentes.service';
import { ActivatedRoute } from '@angular/router';
import { MateriasService } from 'src/app/Servicios/materias.service';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-detalles-docente',
  templateUrl: './detalles-docente.component.html',
  styleUrls: ['./detalles-docente.component.css']
})
export class DetallesDocenteComponent implements OnInit {

  mostrar: boolean;
  activarBoton: boolean;
  docente: Docentes;
  materias: any[];
  materiasRestantes: any[];
  modificarDocente: FormGroup;
  horarios: any[] = [];

  constructor(private formBuilder: FormBuilder,
              private docentesService: DocentesService,
              private materiasService: MateriasService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.getDocente(id);
    this.getMateriasDocentes(id);
    this.getMateriasRestantes(id);
    this.crearFormulario();
    this.mostrar = false;
  }

  crearFormulario(){ 
    this.modificarDocente = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellidos: ['', Validators.required],
      email: ['', Validators.required],
      telefono: ['', Validators.required]
    });
  }

  modificarDocentes(): void {
    const nombre = this.modificarDocente.value.nombre;
    const apellidos = this.modificarDocente.value.apellidos;
    const email = this.modificarDocente.value.email;
    const telefono = this.modificarDocente.value.telefono;
    this.docentesService.modificarDocente(this.docente.id, nombre, apellidos, email, telefono).subscribe(
      data => {
        console.log(data);
      }
    );
    location.assign(`docentes/detalles/${this.docente.id}`);
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
      console.log(data);
      for(let i = 0; i < this.materias.length; i++){
        console.log(this.materias[i].nombre)
        console.log(this.materias[i]['_links'].horarios.href);
        this.getMateriasHorarios(this.materias[i]['_links'].horarios.href);
      }
      }
    )
  }

  getMateriasHorarios(url: string): void {
    this.materiasService.getHorarios(url).subscribe(
      data => {
        const horarios = data['_embedded'].horarios;
        for(let i = 0; i < horarios.length; i++){
          console.log(data['_embedded'].horarios[i].horarios);
          console.log(horarios);
          this.horarios.push(data['_embedded'].horarios[i].horarios);
          // this.horarios[i] = data['_embedded'].horarios[i].horarios;
          }
          console.log(this.horarios);
        }
      )
    }


    /*
  *Función que obtiene todas las materias de la bbdd
  */
 getMateriasRestantes(id: number): void {
  this.materiasService.getMateriasRestantes(id).subscribe(
    data => {
      this.materiasRestantes = data;
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
    this.docentesService.addMateria(this.docente.id, id).subscribe(
      data => {
        console.log('Id docente ' + this.docente.id);
        console.log('Id materia ' + id);
        console.log(data);
      }
    );
   location.reload();
  }

  borrarMateria(id: number): void {
    this.docentesService.borrarMateria(this.docente.id, id).subscribe(
      data => {
        console.log('Id docente ' + this.docente.id);
        console.log('Id materia ' + id);
        console.log(data);
      }
    );
    location.reload();
  }

}
