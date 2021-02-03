import { Injectable } from '@angular/core';
import { Transaction } from '../models/transaction.model';

@Injectable({
  providedIn: 'root',
})
export class TransactionsService {
  private _transactions: Transaction[] = [];
  constructor() {}

  getTransactions(): Transaction[] {
    return this._transactions;
  }

  getTransaction(id: number): Transaction {
    let foundTransaction: Transaction = <Transaction>{};

    for (let transaction of this._transactions) {
      if (transaction.id === id) {
        foundTransaction = transaction;
        break;
      }
    }
    return foundTransaction;
  }
}
