import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectFrameworkComponent } from './select-framework.component';

describe('SelectFrameworkComponent', () => {
  let component: SelectFrameworkComponent;
  let fixture: ComponentFixture<SelectFrameworkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectFrameworkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectFrameworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
