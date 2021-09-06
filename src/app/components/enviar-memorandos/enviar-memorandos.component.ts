import { Component  } from '@angular/core';
@Component({
selector: 'app-root',
templateUrl: './enviar-memorandos.component.html',
styleUrls: ['./enviar-memorandos.component.css']
})
export class EnviarmemorandosComponent {

    constructor() { }
  
    enterName =" ";
    parentData =" ";

TransFerData() {
  this.parentData = this.enterName;

   
    
}
}