import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './components/formulario/formulario.component';
import { AppComponent } from './app.component';
import { EnviarmemorandosComponent } from './components/enviar-memorandos/enviar-memorandos.component';

const routes: Routes = [{ path: '', component: FormularioComponent,  pathMatch: 'full' }];
[{ path: '', component: AppComponent,  pathMatch: 'full'}];
[{ path: '', component: EnviarmemorandosComponent,  pathMatch: 'full'}];

  
 


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
