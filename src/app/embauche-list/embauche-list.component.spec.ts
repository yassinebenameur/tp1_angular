import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmbaucheListComponent } from './embauche-list.component';

describe('EmbaucheListComponent', () => {
  let component: EmbaucheListComponent;
  let fixture: ComponentFixture<EmbaucheListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmbaucheListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmbaucheListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
