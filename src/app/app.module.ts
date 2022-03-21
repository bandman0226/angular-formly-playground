import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { FormlyModule } from '@ngx-formly/core';
import { FormlyPrimeNGModule } from '@ngx-formly/primeng';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { CalendarModule } from 'primeng/calendar';
import { PanelModule } from 'primeng/panel';
import { DatePickerComponent } from './controls/primeng/date-picker/date-picker.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PanelComponent } from './wrappers/primeng/panel/panel.component';

@NgModule({
    declarations: [
        AppComponent,
        DatePickerComponent,
        PanelComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        ReactiveFormsModule,
        FormlyModule.forRoot({
            validationMessages: [
                {name: 'required', message: 'This field is required'},
            ],
            types: [
                {name: 'datepicker', component: DatePickerComponent}
            ],
            wrappers: [
                {name: 'panel', component: PanelComponent}
            ]
        }),
        FormlyPrimeNGModule,
        ButtonModule,
        RippleModule,
        CalendarModule,
        PanelModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
