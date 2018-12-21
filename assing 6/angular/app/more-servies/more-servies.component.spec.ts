import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreServiesComponent } from './more-servies.component';

describe('MoreServiesComponent', () => {
  let component: MoreServiesComponent;
  let fixture: ComponentFixture<MoreServiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoreServiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreServiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
