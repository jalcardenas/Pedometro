import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './principal/principal.component';
import { TransicionComponent } from './transicion/transicion.component';
import { ResultadoComponent } from './resultado/resultado.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { RecordsComponent } from './records/records.component';

import {ServerService} from './server.service';


@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    TransicionComponent,
    ResultadoComponent,
    HeaderComponent,
    RecordsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ServerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
