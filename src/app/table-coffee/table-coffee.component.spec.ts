import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableCoffeeComponent } from './table-coffee.component';

describe('TableCoffeComponent', () => {
  let component: TableCoffeeComponent;
  let fixture: ComponentFixture<TableCoffeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableCoffeeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableCoffeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
