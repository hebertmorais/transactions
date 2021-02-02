import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Transaction } from 'src/app/models/transaction.model';
import { TransactionsService } from 'src/app/services/transactions.service';

@Component({
  selector: 'app-transaction-details',
  templateUrl: './transaction-details.component.html',
  styleUrls: ['./transaction-details.component.css'],
})
export class TransactionDetailsComponent implements OnInit {
  currentTransaction: Transaction = <Transaction>{};

  constructor(
    private transactionsService: TransactionsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const transactionId = parseInt(
      this.route.snapshot.paramMap.get('id') || '0'
    );
    this.currentTransaction = this.transactionsService.getTransaction(
      transactionId
    );
  }
}
