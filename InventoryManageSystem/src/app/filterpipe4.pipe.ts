import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterpipe4'
})
export class Filterpipe4Pipe implements PipeTransform {

  transform(value: any,searchTerm:any): any{
    return value.filter(function(search){
      return search.name.toLowerCase().indexOf(searchTerm.toLowerCase())>-1

    })
  }
}
