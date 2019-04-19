import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacematComponent } from './placemat.component';

describe('PlacematComponent', () => {
  let component: PlacematComponent;
  let fixture: ComponentFixture<PlacematComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlacematComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlacematComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
