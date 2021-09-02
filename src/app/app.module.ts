import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioComponent } from
'./components/formulario/formulario.component';
import { ReactiveFormsModule} from '@angular/forms';
import { EnviarMemorandosComponent } from './components/enviar-memorandos/enviar-memorandos.component';
import { RecibiendoMemorandosComponent } from './components/recibiendo-memorandos/recibiendo-memorandos.component';

@NgModule({
declarations: [
AppComponent,
FormularioComponent,
EnviarMemorandosComponent,
RecibiendoMemorandosComponent
],
imports: [
BrowserModule,
AppRoutingModule,
ReactiveFormsModule,
],
providers: [],
bootstrap: [AppComponent]
})
export class AppModule { }
