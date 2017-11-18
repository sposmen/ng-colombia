import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CitiSearchComponent } from './citi-search.component';

describe('CitiSearchComponent', () => {
  let component: CitiSearchComponent;
  let fixture: ComponentFixture<CitiSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CitiSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CitiSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
