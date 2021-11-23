import { ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

export const getNativeElement = <T>(
  fixture: ComponentFixture<any>,
  cssSelector: string,
) => {

  return fixture.debugElement
    .query(By.css(cssSelector))
    .nativeElement as T;
};

export const setFormControl = <T>(
  fixture: ComponentFixture<T>,
  controlId: string,
  controlValue: any,
) => {

  const input = fixture.debugElement
    .query(By.css(`#${controlId}`))
    .nativeElement;

  input.value = controlValue;
  input.dispatchEvent(new Event('input'));
};