import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'years',
})
export class YearsPipe implements PipeTransform {
  transform(years: number): string {
    return years > 1 ? years.toString() + ' Years' : years.toString() + ' Year';
  }
}
