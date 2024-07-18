import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoffeeDeletedComponent } from './coffee-deleted.component';

describe('CoffeeDeletedComponent', () => {
  let component: CoffeeDeletedComponent;
  let fixture: ComponentFixture<CoffeeDeletedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoffeeDeletedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CoffeeDeletedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
