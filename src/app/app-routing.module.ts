import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrincipalComponent } from './principal/principal.component';
import { TransicionComponent } from './transicion/transicion.component';
import { ResultadoComponent } from './resultado/resultado.component';
import { RecordsComponent } from './records/records.component';

const appRoutes: Routes = [
  { path: 'principal', component: PrincipalComponent },
  { path: 'transicion', component: TransicionComponent },
  { path: 'resultado', component: ResultadoComponent },
  { path: 'records', component: RecordsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
