import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GraficoComponent } from './grafico/grafico.component';
import { ListaComponent } from './lista/lista.component';
import { Lista2Component } from './Lista2/Lista2.component';
import { TelaInicialComponent } from './tela-inicial/tela-inicial.component';
import { Lista3Component } from './Lista3/Lista3.component';

const routes: Routes = [
  {path: 'telainicial', component: TelaInicialComponent },
  {path: 'grafico', component: GraficoComponent },
  {path: 'telainicial/:Tema', component: ListaComponent   },
  {path: 'telainicial/Lista2/:Local', component: Lista2Component   },
  {path: 'telainicial/Lista3/:Lote', component:Lista3Component },
  {path: 'Lista2' , component: Lista2Component},
  {path: 'Lista', component: ListaComponent},

  {path: '', component: TelaInicialComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
