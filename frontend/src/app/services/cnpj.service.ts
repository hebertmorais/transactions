import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Establishment } from '../models/establishment.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CnpjService {
  CNPJ_KEY = 'CNPJ';

  private _currentCnpj: string = '';

  constructor(private http: HttpClient) {
    this._currentCnpj = localStorage.getItem(this.CNPJ_KEY) || '';
  }

  get currentCnpj() {
    return this._currentCnpj;
  }

  getAllEstablishments() {
    return this.http.get(`${environment.BASE_URL}/establishments`);
  }

  addEstablishment(establishment: Establishment) {
    return this.http.post<Establishment>(
      `${environment.BASE_URL}/establishments`,
      establishment,
      {}
    );
  }

  setCurrentCnpj(cnpj: string) {
    localStorage.setItem(this.CNPJ_KEY, cnpj);
    this._currentCnpj = cnpj;
  }
}
