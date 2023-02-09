import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HomeEcranAdmReferentielsMetierComponent } from './ecran-adm-referentiels-metier/components/home-ecran-adm-referentiels-metier/home-ecran-adm-referentiels-metier.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule, CoreModule, AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
