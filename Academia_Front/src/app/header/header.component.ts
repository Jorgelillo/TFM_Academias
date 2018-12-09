import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  url: string[] = ['docentes', 'estudiantes', 'aulas', 'materias'];

  constructor() { }

  ngOnInit() {
    this.getUrl();
  }

  /**
   * Función que recoge la URL y pone en 'active' la opción del nav según donde se encuentre
   */
  private getUrl(): void {
    const url = location.href;
    // console.log(url);

      if (url.substr(0, 30) === `http://localhost:4200/docentes`) {
        this.url['docentes'] = 'active';
        }
      if (url.substr(0, 33) === `http://localhost:4200/estudiantes`) {
        this.url['estudiantes'] = 'active';
        }
      if (url.substr(0, 27) === `http://localhost:4200/aulas`) {
        this.url['aulas'] = 'active';
        }
      if (url.substr(0, 30) === `http://localhost:4200/materias`) {
        this.url['materias'] = 'active';
        }

      }

}
