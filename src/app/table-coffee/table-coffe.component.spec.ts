import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableCoffeComponent } from './table-coffe.component';

describe('TableCoffeComponent', () => {
  let component: TableCoffeComponent;
  let fixture: ComponentFixture<TableCoffeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableCoffeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TableCoffeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
