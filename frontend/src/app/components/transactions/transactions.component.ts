import { Component, OnInit } from '@angular/core';
import { Transaction } from 'src/app/models/transaction.model';
import { CnpjService } from 'src/app/services/cnpj.service';
import { TransactionsService } from 'src/app/services/transactions.service';
@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css'],
})
export class TransactionsComponent implements OnInit {

  currentCnpj: string = '';
  transactions: Transaction[] = []
  displayedColumns = ["descricao", "cliente", "valor"];

  constructor(private cnpjService: CnpjService, private transactionsService: TransactionsService) {}

  ngOnInit(): void {
    this.currentCnpj = this.cnpjService.currentCnpj;
    this.transactions = this.transactionsService.getTransactions();
  }
}
