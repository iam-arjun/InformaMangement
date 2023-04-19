import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterpipe2'
})
export class Filterpipe2Pipe implements PipeTransform {

  transform(value: any, searchTerm: any,searchTerm1: any): any {
    return value.filter(function (search) {
      let leavedate1 = search.leavestart.toLowerCase()
      let leavedate2 = search.leavestart.toLowerCase().slice(0,7)

      return (leavedate1>=searchTerm&&leavedate1<=searchTerm1);

    })
  }

}
// search.leavestart.toLowerCase()