import { Component, OnInit } from '@angular/core';
import { Aulas } from 'src/app/Modelos/Aulas';
import { AulasServiceService } from 'src/app/Servicios/aulas-service.service';
import { ActivatedRoute } from '@angular/router';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-detalles-aula',
  templateUrl: './detalles-aula.component.html',
  styleUrls: ['./detalles-aula.component.css']
})
export class DetallesAulaComponent implements OnInit {

  aula: Aulas;
  modificarAula: FormGroup;
  horarios: any[];
  vista: any[];
  mostrar: boolean;
  verHora: boolean;

  lunes: any = [];
  martes: any = [];
  miercoles: any = [];
  jueves: any = [];
  viernes: any = [];
  sabado: any = [];

  constructor(private formBuilder: FormBuilder,
              private aulasService: AulasServiceService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.verHora = false;
    this.getAula(id);
    this.crearFormulario();
    this.getVistaHorarios(id);
    this.mostrar = false;
    // this.getHorarios(id);
  }

  /*
  *Función que crea la funcionalidad de un formulario
  */
  crearFormulario(){ 
    this.modificarAula = this.formBuilder.group({
      nombre: ['', Validators.required],
      codigo: ['', Validators.required],
      capacidad: ['', Validators.required]
    });
  }

  /*
  *Función permite modificar los datos del aula
  *con los datos introducidos en el formulario
  */
  modificarAulas(): void {
    const nombre = this.modificarAula.value.nombre;
    const codigo = this.modificarAula.value.codigo;
    const capacidad = this.modificarAula.value.capacidad;
    this.aulasService.modificarAulas(this.aula.id, capacidad, nombre, codigo).subscribe(
      data => {
        console.log(data);
      }
    );
    location.assign(`aula/detalles/${this.aula.id}`);
  }

  /*
  *Función que obtiene una de las aulas de la bbdd
  */
  getAula(id: number): void {
    this.aula = new Aulas();
    this.aulasService.getAula(id).subscribe(
      data => {
        this.aula.id = data.id;
        this.aula.nombre = data.nombre;
        this.aula.codigo = data.codigo;
        this.aula.capacidad = data.capacidad;
        console.log(data);
      }
    );
  }

  /*
  *Función que obtiene una vista preconfigurada de la base de datos
  *sobre los horarios de un aula. Además, permite comprobar cada uno de ellos 
  *y clasificarlos en un horario según el día de la semana y la hora que tengan
  */
  getVistaHorarios(id: number): void {
    this.aulasService.getVistaHorarios(id).subscribe(
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
              })
          }
          if (hora.substring(9,10) == 'L'){
            this.lunes.push({horario: hora.substring(11,16),
              materia: datos.materia,
              })
          }
          if (hora.substring(0,1) == 'M'){
            this.martes.push({horario: hora.substring(2,7),
              materia: datos.materia,
              })
          }
          if (hora.substring(9,10) == 'M'){
            this.martes.push({horario: hora.substring(11,16),
              materia: datos.materia,
              })
          }
          if (hora.substring(0,1) == 'X'){
            this.miercoles.push({horario: hora.substring(2,7),
              materia: datos.materia,
              })
          }
          if (hora.substring(9,10) == 'X'){
            this.miercoles.push({horario: hora.substring(11,16),
              materia: datos.materia,
              })
          }
          if (hora.substring(0,1) == 'J'){
            this.jueves.push({horario: hora.substring(2,7),
              materia: datos.materia,
              })
          }
          if (hora.substring(9,10) == 'J'){
            this.jueves.push({horario: hora.substring(11,16),
              materia: datos.materia,
              })
          }
          if (hora.substring(0,1) == 'V'){
            this.viernes.push({horario: hora.substring(2,7),
              materia: datos.materia,
              })
          }
          if (hora.substring(9,10) == 'V'){
            this.viernes.push({horario: hora.substring(11,16),
              materia: datos.materia,
              })
          }
          if (hora.substring(0,1) == 'S'){
            this.sabado.push({horario: hora.substring(2,7),
              materia: datos.materia,
              })
          }
          if (hora.substring(9,10) == 'S'){
            this.sabado.push({horario: hora.substring(11,16),
              materia: datos.materia,
              })
          }
          console.log(this.miercoles);
          console.log(this.miercoles);
        }
      }
    );
  }

  /*
  *Función que muestra o no los horarios según una variable boolean
  */
  mostrarHorarios(): void {
    if (this.mostrar) {
      this.mostrar = false;
    } else {
      this.mostrar = true;
    }
  }

/*
  getHorarios(id: number): void {
    this.aulasService.getHorarios(id).subscribe(
      data => {
        this.horarios = data['_embedded'].horarios;
        console.log(this.horarios);

        for( let i = 0; i < this.horarios.length; i++){
          let hora = this.horarios[i].horarios;
          console.log(hora.substring(0,1));
          console.log(hora.substring(9,10));

          if (hora.substring(0,1) == 'L'){
            this.lunes.push(hora.substring(2,7));
            console.log(this.lunes);
          }
          if (hora.substring(9,10) == 'L'){
            this.lunes.push(hora.substring(11,16));
            console.log(this.lunes);
          }
          if (hora.substring(0,1) == 'M'){
            this.martes.push(hora.substring(2,7));
            console.log(this.martes);
          }
          if (hora.substring(9,10) == 'M'){
            this.martes.push(hora.substring(11,16));
            console.log(this.martes);
          }
          if (hora.substring(0,1) == 'X'){
            this.miercoles.push(hora.substring(2,7));
            console.log(this.miercoles);
          }
          if (hora.substring(9,10) == 'X'){
            this.miercoles.push(hora.substring(11,16));
            console.log(this.miercoles);
          }
          if (hora.substring(0,1) == 'J'){
            this.jueves.push(hora.substring(2,7));
            console.log(this.jueves);
          }
          if (hora.substring(9,10) == 'J'){
            this.jueves.push(hora.substring(11,16));
            console.log(this.jueves);
          }
          if (hora.substring(0,1) == 'V'){
            this.viernes.push(hora.substring(2,7));
            console.log(this.viernes);
          }
          if (hora.substring(9,10) == 'V'){
            this.viernes.push(hora.substring(11,16));
            console.log(this.viernes);
          }
          if (hora.substring(0,1) == 'S'){
            this.sabado.push(hora.substring(2,7));
            console.log(this.sabado);
          }
          if (hora.substring(9,10) == 'S'){
            this.sabado.push(hora.substring(11,16));
            console.log(this.sabado);
          }
        }
        this.lunes.sort();
        this.martes.sort();
        this.miercoles.sort();
        this.jueves.sort();
        this.viernes.sort();
        this.sabado.sort();
       
      }
    );

  }
   */

}
