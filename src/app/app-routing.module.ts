import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'ecran-administration',
    loadChildren: () => 
                        import('./ecran-adm-referentiels-metier/ecran-adm-referentiels-metier.module')
                        .then((m): any => m.EcranAdmReferentielsMetierModule),
  },
  {
    path: '**',
    redirectTo: 'ecran-administration',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
