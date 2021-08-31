import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { formularioComponent } from
'./components/formulario/formulario.component';
import { ReactiveFormsModule} from '@angular/forms';

@NgModule({
declarations: [
AppComponent
formularioComponent ,
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
