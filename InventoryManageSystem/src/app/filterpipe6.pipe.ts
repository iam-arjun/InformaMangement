import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterpipe6'
})
export class Filterpipe6Pipe implements PipeTransform {

  transform(value: any, searchTerm: any): any {
    return value.filter(function (search) {
      return search.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1

    })
  }

}
