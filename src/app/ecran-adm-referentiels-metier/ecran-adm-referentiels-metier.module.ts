import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { HomeEcranAdmReferentielsMetierComponent } from './components/home-ecran-adm-referentiels-metier/home-ecran-adm-referentiels-metier.component';
import { EcranAdmReferentielsMetierRoutingModule } from './ecran-adm-referentiels-metier-routing.module';
import { ReferentielService } from './components/home-ecran-adm-referentiels-metier/service/referentiel.service';

@NgModule({
  declarations: [
    HomeEcranAdmReferentielsMetierComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    EcranAdmReferentielsMetierRoutingModule,
  ],
  exports: [
    SharedModule,
    HomeEcranAdmReferentielsMetierComponent
  ],
  providers: [
    ReferentielService
  ]
})
export class EcranAdmReferentielsMetierModule { }
