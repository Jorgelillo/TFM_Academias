import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomeComponent } from './welcome/welcome.component';
import { MateriasComponent } from './Materia/materias/materias.component';
import { EstudiantesComponent } from './Estudiante/estudiantes/estudiantes.component';
import { AulasComponent } from './Aula/aulas/aulas.component';
import { DocentesComponent } from './Docente/docentes/docentes.component';

const routes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'docentes', component: DocentesComponent },
  { path: 'estudiantes', component: EstudiantesComponent },
  { path: 'materias', component: MateriasComponent },
  { path: 'aulas', component: AulasComponent },
  { path: '**', component: WelcomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
