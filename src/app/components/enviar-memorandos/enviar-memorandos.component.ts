import { Component, Input  } from '@angular/core';
@Component({
selector: 'app-root',
templateUrl: './enviar-memorandos.component.html',
styleUrls: ['./enviar-memorandos.component.css']
})
export class EnviarmemorandosComponent {

constructor() {}
    @Input()
    parentData:string  ;
}



