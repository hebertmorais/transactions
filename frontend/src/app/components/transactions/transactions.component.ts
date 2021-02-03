import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { Transaction } from 'src/app/models/transaction.model';
import { CnpjService } from 'src/app/services/cnpj.service';
import { TransactionsService } from 'src/app/services/transactions.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css'],
})
export class TransactionsComponent implements OnInit {
  @ViewChild('transactionsTable') transactionsTable:
    | MatTable<Transaction>
    | undefined;

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
    this.transactionsService
      .getAllTransactionsFromCnpj(this.currentCnpj)
      .subscribe((data: any) => {
        this.transactions = data;
      });
  }

  addTransaction(): void {
    const dialogRef = this.dialog.open(TransactionInsertComponent, {
      width: '250px',
      data: {
        estabelecimento: this.currentCnpj,
        cliente: '',
        descricao: '',
        valor: '',
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.transactionsService
          .addTransaction(result)
          .subscribe((data: any) => {
            this.transactions.push(data);
          });
        this.transactions.push(result);
        if (this.transactionsTable) this.transactionsTable.renderRows();
      }
      console.log('The dialog was closed', result, this.transactions);
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

  submitDialog() {
    this.dialogRef.close(this.data);
  }
}
