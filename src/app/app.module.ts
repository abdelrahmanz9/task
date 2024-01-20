import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EchartsComponent } from './echarts/echarts.component';
import { CardComponent } from './card/card.component';
import { TableComponent } from './table/table.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { QRCodeModule } from 'angularx-qrcode';
import { HeadComponent } from './head/head.component';
import { SearchAndSortComponent } from './search-and-sort/search-and-sort.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { InputSwitchModule } from 'primeng/inputswitch';

import { TableModule } from 'primeng/table';
@NgModule({
  declarations: [
    AppComponent,
    EchartsComponent,
    CardComponent,
    TableComponent,
    HeadComponent,
    SearchAndSortComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgApexchartsModule,
    QRCodeModule,
    
    ButtonModule,
    InputSwitchModule,
    TableModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
