import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardMainHeader } from './dashboard-main-header';

describe('DashboardMainHeader', () => {
  let component: DashboardMainHeader;
  let fixture: ComponentFixture<DashboardMainHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardMainHeader],
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardMainHeader);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
