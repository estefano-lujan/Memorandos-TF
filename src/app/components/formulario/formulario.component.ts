import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
@Component({
selector: 'app-root',
templateUrl: './formulario.component.html',
styleUrls: ['./formulario.component.css']
})
export class formularioComponent {
miRegistro: FormGroup
constructor( private _builder: FormBuilder){
this.miRegistro= this._builder.group({
userEmail: ['', Validators.compose([Validators.email,
Validators.required])],
userPassword: ['', Validators.required]
});
}
enviar(values: any){
console.log(values)
}
}