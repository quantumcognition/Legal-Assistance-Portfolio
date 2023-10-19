import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpcomComponent } from './helpcom.component';

describe('HelpcomComponent', () => {
  let component: HelpcomComponent;
  let fixture: ComponentFixture<HelpcomComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HelpcomComponent]
    });
    fixture = TestBed.createComponent(HelpcomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  
  it(`should have as title 'Legal-Assistance'`, () => {
    const fixture = TestBed.createComponent(HelpcomComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Legal-Assistance');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(HelpcomComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('Legal-Assistance app is running!');
  });

});
