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
import { CrearMateriaComponent } from './Materia/crear-materia/crear-materia.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DetallesMateriaComponent } from './Materia/detalles-materia/detalles-materia.component';
import { CrearDocenteComponent } from './Docente/crear-docente/crear-docente.component';
import { DetallesDocenteComponent } from './Docente/detalles-docente/detalles-docente.component';
import { CrearEstudianteComponent } from './Estudiante/crear-estudiante/crear-estudiante.component';
import { DetallesEstudianteComponent } from './Estudiante/detalles-estudiante/detalles-estudiante.component';
import { DetallesAulaComponent } from './Aula/detalles-aula/detalles-aula.component';
import { CrearAulaComponent } from './Aula/crear-aula/crear-aula.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WelcomeComponent,
    FooterComponent,
    DocentesComponent,
    EstudiantesComponent,
    MateriasComponent,
    AulasComponent,
    CrearMateriaComponent,
    DetallesMateriaComponent,
    CrearDocenteComponent,
    DetallesDocenteComponent,
    CrearEstudianteComponent,
    DetallesEstudianteComponent,
    DetallesAulaComponent,
    CrearAulaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
