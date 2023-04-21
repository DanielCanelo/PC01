import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoofertaComponent } from './productooferta.component';

describe('ProductoofertaComponent', () => {
  let component: ProductoofertaComponent;
  let fixture: ComponentFixture<ProductoofertaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductoofertaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductoofertaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
