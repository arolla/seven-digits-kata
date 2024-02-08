import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SevenDigitBlockComponent } from './seven-digit-block.component';
import { Component } from '@angular/core';

@Component({
  standalone: true,
  imports: [SevenDigitBlockComponent],
  template: '<div><seven-digit-block [byte]="byte"></seven-digit-block></div>',
})
class TestHostComponent {
  byte: number = 0;
}

describe('SevenDigitBlockComponent', () => {
  let component: SevenDigitBlockComponent;
  let testHostComponent: TestHostComponent;
  let testHostFixture: ComponentFixture<TestHostComponent>;
  let fixture: ComponentFixture<SevenDigitBlockComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SevenDigitBlockComponent],
    });
    testHostFixture = TestBed.createComponent(TestHostComponent);
    fixture = TestBed.createComponent(SevenDigitBlockComponent);
    component = fixture.componentInstance;
    testHostComponent = testHostFixture.componentInstance;
    // fixture.autoDetectChanges()
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have class off on 3rd and 5th divs if segments is [true, true, false, true, true, false, true]', () => {
    component.segments = [true, true, false, true, true, false, true];
    fixture.detectChanges();
    expect(
      fixture.nativeElement.querySelector('.seven-digit-block').children[5]
        .classList
    ).toContain('off');
    expect(
      fixture.nativeElement.querySelector('.seven-digit-block').children[3]
        .classList
    ).toContain('on');
  });

  it('integration test : calling E (79) with the service should have off only on 3rd and 5th ', () => {
    testHostComponent.byte = 79; // 0b1001111
    testHostFixture.detectChanges();

    expect(
      testHostFixture.nativeElement.querySelector('.seven-digit-block')
        .children[5].classList
    ).toContain('off');
    expect(
      testHostFixture.nativeElement.querySelector('.seven-digit-block')
        .children[3].classList
    ).toContain('on');
  });

  it('integration test : calling A (79) with the service should have off only on 6th on for che rest', () => {
    testHostComponent.byte = 119; // 0b1110111
    testHostFixture.detectChanges();

    expect(
      testHostFixture.nativeElement.querySelector('.seven-digit-block')
        .children[1].classList
    ).toContain('on');
    expect(
      testHostFixture.nativeElement.querySelector('.seven-digit-block')
        .children[6].classList
    ).toContain('off');
  });
});
