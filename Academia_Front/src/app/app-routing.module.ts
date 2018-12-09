import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomeComponent } from './welcome/welcome.component';
import { MateriasComponent } from './Materia/materias/materias.component';
import { EstudiantesComponent } from './Estudiante/estudiantes/estudiantes.component';
import { AulasComponent } from './Aula/aulas/aulas.component';
import { DocentesComponent } from './Docente/docentes/docentes.component';
import { DetallesMateriaComponent } from './Materia/detalles-materia/detalles-materia.component';
import { DetallesDocenteComponent } from './Docente/detalles-docente/detalles-docente.component';
import { DetallesAulaComponent } from './Aula/detalles-aula/detalles-aula.component';
import { DetallesEstudianteComponent } from './Estudiante/detalles-estudiante/detalles-estudiante.component';
import { CrearAulaComponent } from './Aula/crear-aula/crear-aula.component';
import { CrearMateriaComponent } from './Materia/crear-materia/crear-materia.component';
import { CrearDocenteComponent } from './Docente/crear-docente/crear-docente.component';
import { CrearEstudianteComponent } from './Estudiante/crear-estudiante/crear-estudiante.component';

const routes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'docente', component: DocentesComponent },
  { path: 'docente/docenteCrear', component: CrearDocenteComponent },
  { path: 'docente/detalles/:id', component: DetallesDocenteComponent },
  { path: 'estudiante', component: EstudiantesComponent },
  { path: 'estudiante/estudianteCrear', component: CrearEstudianteComponent },
  { path: 'estudiante/detalles/:id', component: DetallesEstudianteComponent },
  { path: 'materia', component: MateriasComponent },
  { path: 'materia/materiaCrear', component: CrearMateriaComponent },
  { path: 'materia/detalles/:id', component: DetallesMateriaComponent },
  { path: 'aula', component: AulasComponent },
  { path: 'aula/aulaCrear', component: CrearAulaComponent },
  { path: 'aula/detalles/:id', component: DetallesAulaComponent },
  { path: '**', component: WelcomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
