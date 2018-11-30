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

  verHora: boolean;
  vista: any[];


  lunes: any = [];
  martes: any = [];
  miercoles: any = [];
  jueves: any = [];
  viernes: any = [];
  sabado: any = [];

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
    this.getVistaHorarios(id);
    this.mostrar = false;
  }

  detalles(){
    console.log()
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
    location.assign(`docente/detalles/${this.docente.id}`);
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

  getVistaHorarios(id: number): void {
    this.docentesService.getVistaHorarios(id).subscribe(

      data => {

      this.vista = data;
        if(this.vista.length == 0){
          this.verHora = false;
          console.log(this.verHora);
        } else {
          this.verHora = true;
          console.log(this.verHora);
        }
        console.log(this.vista);
        for( let i = 0; i < this.vista.length; i++){
          let hora = this.vista[i].horario;
          let datos = this.vista[i];

          console.log(hora);

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
          console.log(this.miercoles);
          console.log(this.miercoles);
        }
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
    location.assign(`materia/detalles/${id}`);
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
