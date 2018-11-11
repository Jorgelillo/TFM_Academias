import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { MaterialModule } from './angularMaterial';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { FooterComponent } from './footer/footer.component';
import { DocentesComponent } from './Docente/docentes/docentes.component';
import { EstudiantesComponent } from './Estudiante/estudiantes/estudiantes.component';
import { MateriasComponent } from './Materia/materias/materias.component';
import { AulasComponent } from './Aula/aulas/aulas.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WelcomeComponent,
    FooterComponent,
    DocentesComponent,
    EstudiantesComponent,
    MateriasComponent,
    AulasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
