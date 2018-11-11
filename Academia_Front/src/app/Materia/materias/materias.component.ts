import { Component, OnInit } from '@angular/core';
import { MateriasService } from 'src/app/Servicios/materias.service';
import { Materias } from 'src/app/Modelos/Materias';

@Component({
  selector: 'app-materias',
  templateUrl: './materias.component.html',
  styleUrls: ['./materias.component.css']
})
export class MateriasComponent implements OnInit {

  materias: any[];

  constructor(private materiaService: MateriasService) { }

  ngOnInit() {
    this.getMaterias();
  }

  getMaterias(): void {
    this.materiaService.getMaterias().subscribe(
      data => {
        this.materias = data['_embedded'].materias;
        console.log(this.materias);
      }
    )
  }

}
