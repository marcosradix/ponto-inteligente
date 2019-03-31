import { environment as env} from './../../../../environments/environment';
import { CadastroPF } from './../models/cadastro-pf.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CadastrarPfService {

  private readonly PATH: string = "cadastrar-pf";

  constructor(private http: HttpClient) { }

  cadastrar(cadastroPF: CadastroPF): Observable<CadastroPF>{
    return this.http.post<CadastroPF>(`${env.baseApiUrl}/${this.PATH}`,cadastroPF);
  }
}
