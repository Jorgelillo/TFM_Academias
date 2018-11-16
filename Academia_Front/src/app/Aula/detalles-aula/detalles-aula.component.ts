import { Component, OnInit } from '@angular/core';
import { Aulas } from 'src/app/Modelos/Aulas';
import { AulasServiceService } from 'src/app/Servicios/aulas-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalles-aula',
  templateUrl: './detalles-aula.component.html',
  styleUrls: ['./detalles-aula.component.css']
})
export class DetallesAulaComponent implements OnInit {

  aula: Aulas;

  constructor(private aulasService: AulasServiceService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.getDocente(id);
  }

  /*
  *Función que obtiene uno de los docentes de la bbdd
  */
 getDocente(id: number): void {
  this.aula = new Aulas();
  this.aulasService.getAula(id).subscribe(
    data => {
      this.aula.id = data.id;
      this.aula.capacidad = data.capacidad;
      console.log(data);
      }
    );
  }
}
