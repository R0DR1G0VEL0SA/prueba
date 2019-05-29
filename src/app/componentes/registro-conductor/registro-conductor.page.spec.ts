import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroConductorPage } from './registro-conductor.page';

describe('RegistroConductorPage', () => {
  let component: RegistroConductorPage;
  let fixture: ComponentFixture<RegistroConductorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroConductorPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroConductorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
