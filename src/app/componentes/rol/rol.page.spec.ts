import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RolPage } from './rol.page';

describe('RolPage', () => {
  let component: RolPage;
  let fixture: ComponentFixture<RolPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RolPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RolPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
