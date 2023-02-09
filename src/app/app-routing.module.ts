import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { redirectRoutes } from './app-routing-redirect';
import { HomeEcranAdmReferentielsMetierComponent } from './ecran-adm-referentiels-metier/components/home-ecran-adm-referentiels-metier/home-ecran-adm-referentiels-metier.component';
import { EcranAdmReferentielsMetierModule } from './ecran-adm-referentiels-metier/ecran-adm-referentiels-metier.module';

const routes: Routes = [
  {
    path: 'ecran-administration',
    loadChildren: (): Promise<any> => 
                        import('./ecran-adm-referentiels-metier/ecran-adm-referentiels-metier.module')
                        .then((m): any => m.EcranAdmReferentielsMetierModule),
  }
];

const wildcardRoute: Routes = [
  { path: '**', redirectTo: 'accueil-controle' },
];

@NgModule({
  imports: [RouterModule.forRoot([...routes, ...redirectRoutes, ...wildcardRoute])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
