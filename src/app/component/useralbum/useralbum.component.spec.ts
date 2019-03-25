import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UseralbumComponent } from './useralbum.component';

describe('UseralbumComponent', () => {
  let component: UseralbumComponent;
  let fixture: ComponentFixture<UseralbumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UseralbumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UseralbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
