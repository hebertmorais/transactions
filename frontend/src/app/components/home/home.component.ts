import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CnpjService } from 'src/app/services/cnpj.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  cnpjInput: string = '';
  cnpjList: Set<string> = new Set();

  constructor(private cnpjService: CnpjService, private router: Router) {}

  ngOnInit(): void {}

  addCnpj() {
    this.cnpjList.add(this.cnpjInput);
  }

  openTransactions(cnpj: string) {
    this.cnpjService.setCurrentCnpj(cnpj);
    this.router.navigate(['/transactions']);
  }
}
