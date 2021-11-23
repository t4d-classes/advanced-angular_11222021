import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currency',
})
export class FakeCurrencyPipe implements PipeTransform {

  transform(value: any) {
    return value;
  }

}