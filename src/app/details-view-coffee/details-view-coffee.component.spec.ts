import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsViewCoffeeComponent } from './details-view-coffee.component';

describe('DetailsViewCoffeeComponent', () => {
  let component: DetailsViewCoffeeComponent;
  let fixture: ComponentFixture<DetailsViewCoffeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailsViewCoffeeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailsViewCoffeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
