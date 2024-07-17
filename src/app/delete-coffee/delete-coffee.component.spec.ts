import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCoffeeComponent } from './delete-coffee.component';

describe('DeleteCoffeeComponent', () => {
  let component: DeleteCoffeeComponent;
  let fixture: ComponentFixture<DeleteCoffeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteCoffeeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeleteCoffeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
