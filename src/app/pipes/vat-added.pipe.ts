import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vatAdded'
})
export class VatAddedPipe implements PipeTransform { // vat=kdvergisi 
//pipe veriyi farklı şekilde göstermek için.
  transform(value: number, rate: number): number { // value pipe'ın etkilediği data.
    return value + value * rate / 100;
  }

}
