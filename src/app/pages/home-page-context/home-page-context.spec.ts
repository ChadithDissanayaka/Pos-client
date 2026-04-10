import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageContext } from './home-page-context';

describe('HomePageContext', () => {
  let component: HomePageContext;
  let fixture: ComponentFixture<HomePageContext>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomePageContext],
    }).compileComponents();

    fixture = TestBed.createComponent(HomePageContext);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
