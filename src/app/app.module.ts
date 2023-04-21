import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaginaprincipalComponent } from './paginaprincipal/paginaprincipal.component';
import { ListaproductosComponent } from './listaproductos/listaproductos.component';
import { FormapagoComponent } from './formapago/formapago.component';
import { ProductoofertaComponent } from './productooferta/productooferta.component';

@NgModule({
  declarations: [
    AppComponent,
    PaginaprincipalComponent,
    ListaproductosComponent,
    FormapagoComponent,
    ProductoofertaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
