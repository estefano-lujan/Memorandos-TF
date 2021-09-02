import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecibiendoMemorandosComponent } from './recibiendo-memorandos.component';

describe('RecibiendoMemorandosComponent', () => {
  let component: RecibiendoMemorandosComponent;
  let fixture: ComponentFixture<RecibiendoMemorandosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecibiendoMemorandosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecibiendoMemorandosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
