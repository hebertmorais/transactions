import { Injectable } from '@angular/core';
import { Transaction } from '../models/transaction.model';

@Injectable({
  providedIn: 'root',
})
export class TransactionsService {
  private _transactions = [
    {
      id: 1,
      estabelecimento: '45.283.163/0001-67',
      cliente: '094.214.930-01',
      valor: 590.01,
      descricao: 'Almoço em restaurante chique pago via App!',
    },
    {
      id: 2,
      estabelecimento: '12.483.363/0001-27',
      cliente: '094.214.930-01',
      valor: 90.01,
      descricao: 'Jantar em restaurante chique pago via App!',
    },
  ];
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
