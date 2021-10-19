import { UpdateModalComponent } from './update-modal/update-modal.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
//import { RouterModule, Routes } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { CustomersComponent } from './components/customers/customers.component';
import { AppRoutingModule } from './app-routing.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable'; // dependência para a tabela de clientes
import { HttpClientModule } from '@angular/common/http';
import { AddUserModalComponent } from './add-user-modal/add-user-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


//ngModule principal, declarando e importando as principais dependências e componentes utilizados

@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    AddUserModalComponent,
    UpdateModalComponent
  ],
  entryComponents: [AddUserModalComponent, UpdateModalComponent],
  imports: [
     BrowserModule,
     ReactiveFormsModule,
     IonicModule.forRoot(),
     HttpClientModule,
     AppRoutingModule,
     FormsModule,
     NgxDatatableModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
