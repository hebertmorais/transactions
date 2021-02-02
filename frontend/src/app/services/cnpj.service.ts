import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CnpjService {
  CNPJ_KEY = 'CNPJ';

  private _currentCnpj: string = '';

  constructor() {
    this._currentCnpj = localStorage.getItem(this.CNPJ_KEY) || '';
  }

  get currentCnpj() {
    return this._currentCnpj;
  }

  setCurrentCnpj(cnpj: string) {
    localStorage.setItem(this.CNPJ_KEY, cnpj);
    this._currentCnpj = cnpj;
  }
}
