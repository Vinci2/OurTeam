import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurTeamContainerComponent } from './our-team-container.component';

describe('OurTeamContainerComponent', () => {
  let component: OurTeamContainerComponent;
  let fixture: ComponentFixture<OurTeamContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurTeamContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurTeamContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
