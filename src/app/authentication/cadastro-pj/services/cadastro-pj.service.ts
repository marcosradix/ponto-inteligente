import { CadastroPJ } from './../models/cadastro-pj.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env} from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CadastroPjService {
private readonly PATH: string = "cadastrar-pj";

  constructor(private http:HttpClient) { }

  cadastrar(cadastroPJ: CadastroPJ): Observable<any>{
    return this.http.post(`${env.baseApiUrl}/${this.PATH}`, cadastroPJ);
  }
}
