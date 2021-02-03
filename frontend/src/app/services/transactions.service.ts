import { Injectable } from '@angular/core';
import { Transaction } from '../models/transaction.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TransactionsService {
  BASE_URL = 'https://shipay.herokuapp.com';

  constructor(private http: HttpClient) {}

  getAllTransactionsFromCnpj(cnpj: string) {
    return this.http.get<Transaction>(
      `${this.BASE_URL}/transactions?estabelecimento=${cnpj}`
    );
  }

  getTransaction(id: number) {
    return this.http.get<Transaction>(`${this.BASE_URL}/transactions/${id}`);
  }

  addTransaction(transaction: Transaction) {
    return this.http.post<Transaction>(
      `${this.BASE_URL}/transactions`,
      transaction,
      {}
    );
  }
}
