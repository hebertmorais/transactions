import { Component, Inject, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
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
  transactions: Transaction[] = [];
  displayedColumns = ['descricao', 'cliente', 'valor'];

  constructor(
    private cnpjService: CnpjService,
    private transactionsService: TransactionsService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.currentCnpj = this.cnpjService.currentCnpj;
    this.transactions = this.transactionsService.getTransactions();
  }

  addTransaction(): void {
    const dialogRef = this.dialog.open(TransactionInsertComponent, {
      width: '250px',
      data: {},
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed', result);
    });
  }
}

@Component({
  selector: 'app-transaction-insert',
  templateUrl: '../transaction-insert/transaction-insert.component.html',
  styleUrls: ['../transaction-insert/transaction-insert.component.css'],
})
export class TransactionInsertComponent {
  constructor(
    public dialogRef: MatDialogRef<TransactionInsertComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Transaction
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
