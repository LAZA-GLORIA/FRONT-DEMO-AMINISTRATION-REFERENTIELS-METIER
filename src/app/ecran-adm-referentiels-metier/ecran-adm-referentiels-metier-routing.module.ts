import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeEcranAdmReferentielsMetierComponent } from './components/home-ecran-adm-referentiels-metier/home-ecran-adm-referentiels-metier.component';

const routes: Routes = [
  {
    path: '',
    component: HomeEcranAdmReferentielsMetierComponent,
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EcranAdmReferentielsMetierRoutingModule { }
