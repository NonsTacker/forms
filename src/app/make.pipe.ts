import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'numText',
    standalone : true
}) export class MakePipe implements PipeTransform {
    units = ['','one','two','three','four','five','six','seven','eight','nine']
    teens = ['','eleven','twelve','thirteen','fourteen','fifteen','sixteen', 'seventeen','eighteen','nineteen']
    tens = ['','ten','twenty','thirty','forty','fifty','sixty','seventy', 'eighty','ninety']
    transform(value: number): any {
        let txt = "";
        if (value == 1) {
            txt = "more";
        } else if (value > 10 && value < 20) {
            txt = this.teens[value % 10];
        } else {
            txt = this.tens[(value - (value % 10)) / 10]
            if(value % 10 != 0 && value / 10 > 2) {
                txt += "-" + this.units[value % 10];
            } else {
                txt += this.units[value % 10];
            }
        }
        return txt;
    }
}