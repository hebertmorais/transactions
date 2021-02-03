import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { MatTable, MatTableDataSource } from '@angular/material/table';
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
  transactions = new MatTableDataSource();
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
        this.transactions.data = data;
        if (this.transactionsTable) this.transactionsTable.renderRows();
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
      const transaction = { ...result, data: new Date().toISOString() };
      if (transaction) {
        this.transactionsService
          .addTransaction(transaction)
          .subscribe((transactionRes: any) => {
            this.transactions.data.push(transactionRes);
            if (this.transactionsTable) this.transactionsTable.renderRows();
          });
      }
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.transactions.filter = filterValue.trim().toLowerCase();
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
