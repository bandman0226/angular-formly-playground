import { Component } from '@angular/core'
import { FormGroup } from '@angular/forms'
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core'
import { HttpClient } from '@angular/common/http'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'Angular NGX-Formly with Prime NG'
    form = new FormGroup({});
    model = {
        name: null,
        email: null,
        date_of_birth: null,
        amount: 100,
        address: {}
        // terms_1: false,
        // terms: false,
        // description: "",
        // gender: 3
    };
    options: FormlyFormOptions = {
        formState: {
            mainModel: this.model
        }
    };

    constructor(private http: HttpClient) {
    }


    fields: FormlyFieldConfig[] = [
        {
            key: 'name',
            type: 'input',
            templateOptions: {
                label: 'Name',
                placeholder: 'Enter name',
                required: true,
            }
        },
        {
            key: 'email',
            type: 'input',
            hideExpression: '!model.name',
            templateOptions: {
                type: 'email',
                label: 'Email',
                placeholder: 'Enter email',
                minLength: 3,
            },
        },
        {
            key: 'date_of_birth',
            type: 'datepicker',
            templateOptions: {
                label: 'Datepicker',
                placeholder: 'Placeholder',
                description: 'Description',
            },
        },
        {
            key: 'amount',
            type: 'input',
            templateOptions: {
                type: 'number',
                label: 'Amount',
                placeholder: 'Enter amount',
                min: 1,
                max: 15
            }
        },
        {
            key: 'address',
            wrappers: ['panel'],
            templateOptions: {label: 'Address'},
            fieldGroup: [
                {
                    key: 'street',
                    type: 'input',
                    templateOptions: {
                        type: 'text',
                        label: 'Street',
                    },
                },
                {
                    key: 'town',
                    type: 'input',
                    hideExpression: '!formState.mainModel.address.street',
                    templateOptions: {
                        type: 'text',
                        label: 'Town',
                    }
                },
                {
                    key: 'zip',
                    type: 'input',
                    hideExpression: '!formState.mainModel.address.town',
                    templateOptions: {
                        type: 'text',
                        label: 'Zip Code',
                    },
                },

            ],
            hideExpression: '!formState.mainModel.name'
            // hideExpression: (model: any, formState: any) => {
            //     // access to the main model can be through `this.model` or `formState` or `model`
            //     console.log(formState);
            //     if (formState.mainModel && formState.mainModel.name) {
            //         console.log('true');
            //         return false;
            //     }
            //     return true;
            // }
        },
    ];


    // fields: FormlyFieldConfig[] = [
    //     {
    //         key: 'name',
    //         type: 'input',
    //         templateOptions: {
    //             label: 'Name',
    //             placeholder: 'Enter name',
    //             required: true,
    //         },
    //     },
    //     {
    //         key: 'email',
    //         type: 'input',
    //         hideExpression: '!model.name',
    //         templateOptions: {
    //             type: 'email',
    //             label: 'Email',
    //             placeholder: 'Enter email',
    //             minLength: 3,
    //         },
    //     },
    //     {
    //         key: 'amount',
    //         type: 'input',
    //         templateOptions: {
    //             type: 'number',
    //             label: 'Amount',
    //             placeholder: 'Enter amount',
    //             min: 1,
    //             max: 15
    //         }
    //     },
    //     {
    //         key: 'ip',
    //         type: 'input',
    //         templateOptions: {
    //             label: 'IP Address (using custom validation declared in ngModule)',
    //             required: true,
    //         },
    //         validators: {
    //             validation: ['ip'],
    //         },
    //     },
    //     {
    //         key: 'date_of_birth',
    //         type: 'datepicker',
    //         templateOptions: {
    //             label: 'Datepicker',
    //             placeholder: 'Placeholder',
    //             description: 'Description',
    //             required: true,
    //         },
    //     },
    //     {
    //         key: 'terms',
    //         type: 'checkbox',
    //         templateOptions: {
    //             label: 'Accept terms',
    //             description: 'Please accept our terms',
    //             required: true,
    //         },
    //     },
    //     {
    //         key: 'terms_1',
    //         type: 'toggle',
    //         templateOptions: {
    //             label: 'Accept terms',
    //             description: 'Please accept our terms',
    //             required: true,
    //         },
    //     },
    //     {
    //         key: 'description',
    //         type: 'textarea',
    //         templateOptions: {
    //             label: 'Description',
    //             placeholder: 'Enter description',
    //         }
    //     },
    //     {
    //         key: 'gender',
    //         type: 'radio',
    //         templateOptions: {
    //             label: 'Gender',
    //             placeholder: 'Placeholder',
    //             description: 'Fill in your gender',
    //             options: [
    //                 {value: 1, label: 'Male'},
    //                 {value: 2, label: 'Female'},
    //                 {value: 3, label: 'I don\'t want to share that'},
    //             ],
    //         },
    //     },
    //     // Repeatable section
    //     {
    //         key: 'investments',
    //         type: 'repeat',
    //         templateOptions: {
    //             addText: 'Add another investment',
    //         },
    //         fieldArray: {
    //             fieldGroup: [
    //                 {
    //                     type: 'input',
    //                     key: 'investmentName',
    //                     templateOptions: {
    //                         label: 'Name of Investment:',
    //                         required: true,
    //                     },
    //                 },
    //                 {
    //                     type: 'datepicker',
    //                     key: 'investmentDate',
    //                     templateOptions: {
    //                         label: 'Date of Investment:',
    //                     },
    //                 },
    //                 {
    //                     key: 'amount',
    //                     type: 'input',
    //                     templateOptions: {
    //                         type: 'number',
    //                         label: 'Amount',
    //                         placeholder: 'Enter amount',
    //                         min: 1,
    //                         max: 15
    //                     }
    //                 },
    //             ],
    //         },
    //     },
    // ];

    onSubmit(model: any) {
        console.log(model.formState);
        // if (this.form.valid) {
        //     this.http.post('url', this.model).subscribe((response: any) => {
        //         console.log('response:', response)
        //     }, (error) => {
        //         console.error('error:', error)
        //     })
        // }
    }
}
