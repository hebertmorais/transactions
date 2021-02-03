import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Establishment } from 'src/app/models/establishment.model';
import { CnpjService } from 'src/app/services/cnpj.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  cnpjInput: string = '';
  establishments: Establishment[] = [];

  constructor(private cnpjService: CnpjService, private router: Router) {}

  ngOnInit(): void {
    this.cnpjService.getAllEstablishments().subscribe((data: any) => {
      console.log(data);
      this.establishments = data;
    });
  }

  addCnpj() {
    //this.establishments.push(this.cnpjInput);
    const newEstablishment = { cnpj: this.cnpjInput };
    this.cnpjService
      .addEstablishment(newEstablishment)
      .subscribe((data: any) => {
        this.establishments.push(data);
      });
  }

  openTransactions(cnpj: string) {
    this.cnpjService.setCurrentCnpj(cnpj);
    this.router.navigate(['/transactions']);
  }
}
