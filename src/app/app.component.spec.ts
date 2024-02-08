import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [AppComponent],
    })
  );

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('first and fifth should be horizontally aligned', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    fixture.detectChanges();
    expect(
      fixture.nativeElement
        .querySelector('.board')
        .children[0].getBoundingClientRect().top
    ).toEqual(
      fixture.nativeElement
        .querySelector('.board')
        .children[4].getBoundingClientRect().top
    );
  });
});
