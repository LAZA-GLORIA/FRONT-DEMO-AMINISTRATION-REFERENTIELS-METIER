import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { HomeEcranAdmReferentielsMetierComponent } from './components/home-ecran-adm-referentiels-metier/home-ecran-adm-referentiels-metier.component';
import { EcranAdmReferentielsMetierRoutingModule } from './ecran-adm-referentiels-metier-routing.module';



@NgModule({
  declarations: [
    HomeEcranAdmReferentielsMetierComponent
  ],
  imports: [
    SharedModule,
    EcranAdmReferentielsMetierRoutingModule,
  ]
})
export class EcranAdmReferentielsMetierModule { }
