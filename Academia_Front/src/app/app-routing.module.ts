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

const routes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'docentes', component: DocentesComponent },
  { path: 'docentes/detalles/:id', component: DetallesDocenteComponent },
  { path: 'estudiantes', component: EstudiantesComponent },
  { path: 'materias', component: MateriasComponent },
  { path: 'materias/detalles/:id', component: DetallesMateriaComponent },
  { path: 'aulas', component: AulasComponent },
  { path: 'aulas/detalles/:id', component: DetallesAulaComponent },
  { path: '**', component: WelcomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
