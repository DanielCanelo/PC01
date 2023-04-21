import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PaginaprincipalComponent } from './paginaprincipal/paginaprincipal.component';
import { ListaproductosComponent } from './listaproductos/listaproductos.component';
import { FormapagoComponent } from './formapago/formapago.component';
import { ProductoofertaComponent } from './productooferta/productooferta.component';

const routes: Routes = [
  { path: '', component: PaginaprincipalComponent },
  { path: 'ListaDeProductos', component: ListaproductosComponent },
  { path: 'FormaDePago', component: FormapagoComponent },
  { path: 'ListaDeProductos/ProductosEnOferta', component: ProductoofertaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
