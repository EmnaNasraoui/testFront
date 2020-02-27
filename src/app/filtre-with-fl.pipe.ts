import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtreWithFL'
})
export class FiltreWithFLPipe implements PipeTransform {

  transform(value: any[], searchJson: any) {

    if (searchJson.name.length === 0) {
      return value;
    }

    Array.prototype['equals'] = function (array) {
      if (!array) {
        return false;
      }
      for (let i = 0, l = this.length; i < l; i++) {
        if (array.includes(this[i])) {
          return true;
        }
      }
      return false;
    };

    return value.filter(it => {
      let name;
      if (searchJson.name.length !== 0) {
        console.log(it.name[0]);

        name = searchJson.name.includes(it.name[0]);
        console.log(name);

      } else {
        name = true;
      }

      return name;
    });
  }


}
