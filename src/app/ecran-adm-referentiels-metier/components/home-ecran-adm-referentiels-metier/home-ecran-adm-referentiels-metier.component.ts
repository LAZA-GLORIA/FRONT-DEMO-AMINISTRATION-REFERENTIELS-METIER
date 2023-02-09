import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Referentiel } from '../../models/referentiel';
import { ReferentielService } from './service/referentiel.service';

@Component({
  selector: 'app-home-ecran-adm-referentiels-metier',
  templateUrl: './home-ecran-adm-referentiels-metier.component.html',
  styleUrls: ['./home-ecran-adm-referentiels-metier.component.css']
})
export class HomeEcranAdmReferentielsMetierComponent implements OnInit {
  dataref$!: Observable<Referentiel[]>;
  dataref!: Referentiel[];

  constructor( private readonly referentielservice: ReferentielService) {}

  ngOnInit(): void{
   this.dataref$ = this.referentielservice.getReferentiel();
  }
}
