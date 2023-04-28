import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterpipe5'
})
export class Filterpipe5Pipe implements PipeTransform {
  transform(value: any, searchTerm: any): any {
    return value.filter(function (search) {
      return search.fullname.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1

    })
  }

}
