import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionInsertComponent } from './transaction-insert.component';

describe('TransactionInsertComponent', () => {
  let component: TransactionInsertComponent;
  let fixture: ComponentFixture<TransactionInsertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionInsertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
