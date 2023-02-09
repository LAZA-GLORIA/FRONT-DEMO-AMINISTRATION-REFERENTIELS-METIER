import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Referentiel } from "src/app/ecran-adm-referentiels-metier/models/referentiel";
import { moke } from "./referentiel";

@Injectable()
export class ReferentielService {
    constructor(private readonly http: HttpClient) {}

// getReferentiel(){
//     console.log("hello", this.http.get('referentiel.json'));
//     return this.http.get('referentiel.json')
//     .subscribe(data => {
//         console.log(data);
//     });
// }

getReferentiel(): Observable<Referentiel[]> {
    //return this.http.get<Referentiel[]>('referentiel.json');
    return of(moke);
}
}