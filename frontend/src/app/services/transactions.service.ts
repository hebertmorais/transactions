import { Injectable } from '@angular/core';
import { Transaction } from '../models/transaction.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TransactionsService {
  constructor(private http: HttpClient) {}

  getAllTransactionsFromCnpj(cnpj: string) {
    return this.http.get<Transaction>(
      `${environment.BASE_URL}/transactions?estabelecimento=${cnpj}`
    );
  }

  getTransaction(id: number) {
    return this.http.get<Transaction>(`${environment.BASE_URL}/transactions/${id}`);
  }

  addTransaction(transaction: Transaction) {
    return this.http.post<Transaction>(
      `${environment.BASE_URL}/transactions`,
      transaction,
      {}
    );
  }
}
