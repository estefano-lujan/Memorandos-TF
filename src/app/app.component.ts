import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
@Component({
selector: 'app-root',
templateUrl: './app.component.html',
styleUrls: ['./app.component.css']
})
export class AppComponent {
miFormulario: FormGroup
constructor( private _builder: FormBuilder){
this.miFormulario = this._builder.group({
userEmail: ['', Validators.compose([Validators.email,
Validators.required])],
userPassword: ['', Validators.required]
});
}
enviar(values: any){
console.log(values)
}
}
