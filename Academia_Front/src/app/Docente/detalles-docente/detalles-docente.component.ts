import { Component, OnInit } from '@angular/core';
import { Docentes } from 'src/app/Modelos/Docentes';
import { DocentesService } from 'src/app/Servicios/docentes.service';
import { ActivatedRoute, Router } from '@angular/router';
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

  verHora: boolean;
  vista: any[];

  lunes: any = [];
  martes: any = [];
  miercoles: any = [];
  jueves: any = [];
  viernes: any = [];
  sabado: any = [];

  idMat = +this.route.snapshot.paramMap.get('id');

  constructor(private formBuilder: FormBuilder,
              private docentesService: DocentesService,
              private materiasService: MateriasService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.getDocente(id);
    this.getMateriasDocentes(id);
    this.getMateriasRestantes(id);
    this.crearFormulario();
    this.getVistaHorarios(id);
    this.mostrar = false;
  }

  /**
  * Función que crea un formulario y sus funcionalidades
  */
  crearFormulario(){ 
    this.modificarDocente = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellidos: ['', Validators.required],
      email: ['', Validators.required],
      telefono: ['', Validators.required]
      }
    )
  }

  /**
  * Función que permite modificar un docente a partir de un formulario
  */
  modificarDocentes(): void {
    const nombre = this.modificarDocente.value.nombre;
    const apellidos = this.modificarDocente.value.apellidos;
    const email = this.modificarDocente.value.email;
    const telefono = this.modificarDocente.value.telefono;
    this.docentesService.modificarDocente(this.docente.id, nombre, apellidos, email, telefono).subscribe(
      data => {
        // console.log(data);
        this.getDocente(this.docente.id);
      }
    );
    // location.assign(`docente/detalles/${this.docente.id}`);
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
        // console.log(data);
      }
    );
  }

  /**
   * Función que recoge los datos de los horarios de cada docente a partir de 
   * una vista preconfigurada para ello. Además, clasifica los datos recogidos
   * para mostrarlos en un formato horario bidimensional, según dias y horas.
   */
  getVistaHorarios(id: number): void {
    this.docentesService.getVistaHorarios(id).subscribe(
      data => {
      this.vista = data;
        if(this.vista.length == 0){
          this.verHora = false;
          // console.log(this.verHora);
        } else {
          this.verHora = true;
          // console.log(this.verHora);
        }
        // console.log(this.vista);
        for( let i = 0; i < this.vista.length; i++){
          let hora = this.vista[i].horario;
          let datos = this.vista[i];
          // console.log(hora);
          if (hora.substring(0,1) == 'L'){
            this.lunes.push({horario: hora.substring(2,7),
              materia: datos.materia,
              grupo: datos.grupo
              })
          }
          if (hora.substring(9,10) == 'L'){
            this.lunes.push({horario: hora.substring(11,16),
              materia: datos.materia,
              grupo: datos.grupo
              })
          }
          if (hora.substring(0,1) == 'M'){
            this.martes.push({horario: hora.substring(2,7),
              materia: datos.materia,
              grupo: datos.grupo
              })
          }
          if (hora.substring(9,10) == 'M'){
            this.martes.push({horario: hora.substring(11,16),
              materia: datos.materia,
              grupo: datos.grupo
              })
          }
          if (hora.substring(0,1) == 'X'){
            this.miercoles.push({horario: hora.substring(2,7),
              materia: datos.materia,
              grupo: datos.grupo
              })
          }
          if (hora.substring(9,10) == 'X'){
            this.miercoles.push({horario: hora.substring(11,16),
              materia: datos.materia,
              grupo: datos.grupo
              })
          }
          if (hora.substring(0,1) == 'J'){
            this.jueves.push({horario: hora.substring(2,7),
              materia: datos.materia,
              grupo: datos.grupo
              })
          }
          if (hora.substring(9,10) == 'J'){
            this.jueves.push({horario: hora.substring(11,16),
              materia: datos.materia,
              grupo: datos.grupo
              })
          }
          if (hora.substring(0,1) == 'V'){
            this.viernes.push({horario: hora.substring(2,7),
              materia: datos.materia,
              grupo: datos.grupo
              })
          }
          if (hora.substring(9,10) == 'V'){
            this.viernes.push({horario: hora.substring(11,16),
              materia: datos.materia,
              grupo: datos.grupo
              })
          }
          if (hora.substring(0,1) == 'S'){
            this.sabado.push({horario: hora.substring(2,7),
              materia: datos.materia,
              grupo: datos.grupo
              })
          }
          if (hora.substring(9,10) == 'S'){
            this.sabado.push({horario: hora.substring(11,16),
              materia: datos.materia,
              grupo: datos.grupo
              })
          }
          // console.log(this.miercoles);
          // console.log(this.miercoles);
        }
        }
      );
  }

  /*
  *Función que obtiene las materias de un docente
  *y por cada una de ellas llama a la funcion para obtener sus horarios.
  */
  getMateriasDocentes(id: number): void {
    this.materiasService.getMateriasDocentes(id).subscribe(
      data => {
        this.materias = data['_embedded'].materias;
        // console.log(this.materias);
        // console.log(data);
        for(let i = 0; i < this.materias.length; i++){
          // console.log(this.materias[i].nombre)
          // console.log(this.materias[i]['_links'].horarios.href);
          this.getMateriasHorarios(this.materias[i]['_links'].horarios.href);
        }
      }
    )
  }

  /**
  * Función que recoge los horarios de cada una de las materia que imparte 
  * un docente
  */
  getMateriasHorarios(url: string): void {
    this.materiasService.getHorarios(url).subscribe(
      data => {
        const horarios = data['_embedded'].horarios;
        for(let i = 0; i < horarios.length; i++){
          // console.log(data['_embedded'].horarios[i].horarios);
          // console.log(horarios);
          this.horarios.push(data['_embedded'].horarios[i].horarios);
          // this.horarios[i] = data['_embedded'].horarios[i].horarios;
          }
          // console.log(this.horarios);
        }
      )
    }

  /*
  *Función que obtiene las materias que no imparte un docente
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

  /**
  * Función muestra o no las materias segun una variable boolean
  */
  mostrarMaterias(): void {
    if (this.mostrar) {
      this.mostrar = false;
    } else {
      this.mostrar = true;
    }
  }

  /**
  * Función que redirige a los detalles de una materia
  * segun la que se haya clicado
  */
  verMateria(id: number): void {
    // this.router.navigate([`materia/detalles/${id}`]);
    location.assign(`materia/detalles/${id}`);
  }

  /**
  * Función que permite añadir una materia a un docente
  */
  addMateria(id: number): void {
    this.docentesService.addMateria(this.docente.id, id).subscribe(
      data => {
        // console.log('Id docente ' + this.docente.id);
        // console.log('Id materia ' + id);
        // console.log(data);
        this.getMateriasDocentes(this.docente.id);
        this.getMateriasRestantes(this.docente.id);
        this.lunes = [];
        this.martes = [];
        this.miercoles = [];
        this.jueves = [];
        this.viernes = [];
        this.sabado = [];
        this.getVistaHorarios(this.idMat);
      }
    );
   // location.reload();
  }

  /**
  * Función que elimina una materia que imparte un docente
  */
  borrarMateria(id: number): void {
    this.docentesService.borrarMateria(this.docente.id, id).subscribe(
      data => {
        // console.log('Id docente ' + this.docente.id);
        // console.log('Id materia ' + id);
        // console.log(data);
        this.getMateriasDocentes(this.docente.id);
        this.getMateriasRestantes(this.docente.id);
        this.lunes = [];
        this.martes = [];
        this.miercoles = [];
        this.jueves = [];
        this.viernes = [];
        this.sabado = [];
        this.getVistaHorarios(this.idMat);
      }
    );
    // location.reload();
  }

}
