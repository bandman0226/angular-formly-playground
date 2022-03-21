import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
    selector: 'app-date-picker',
    templateUrl: './date-picker.component.html',
    styleUrls: ['./date-picker.component.scss']
})
export class DatePickerComponent extends FieldType {
    value: Date = new Date;

    constructor() {
        super();
    }

    onSelect($event: any) {
        console.log($event);
    }
}
