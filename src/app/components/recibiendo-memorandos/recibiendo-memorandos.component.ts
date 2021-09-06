import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-recibiendo-memorandos',
  templateUrl: './recibiendo-memorandos.component.html',
  styleUrls: ['./recibiendo-memorandos.component.css']
})
export class RecibiendoMemorandosComponent {

  constructor() { }
  @Input()
  parentData!: string;
  ngOnInit(): void {
  }

}
