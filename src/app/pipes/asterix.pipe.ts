import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'asterix'
})
export class AsterixPipe implements PipeTransform {

  transform(ch) {
    let con = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "z"];
    let conMaj = ["B", "C", "D", "F", "G", "H", "J", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "V", "W", "Z", "Z"];
    let n = ch.length;
    for (let i = 0; i < n; i++) {
      let inter = '';
      if ((ch[i] == 'a') || (ch[i] == 'A') ) {
        for (var j in con) {

          if ((ch[i-1] == con[j]) || (ch[i-1] == con[j])) {
            inter = "*";
            break ;
          } else if (ch[i-1]== conMaj[j]) {
            inter = ch [i];

          }
          
        }
      }
    }
    return ch;
  }

}
