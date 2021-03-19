import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarComponent } from './components/car/car.component';
import { RentalComponent } from './components/rental/rental.component';
import { NaviComponent } from './components/navi/navi.component';
import { BrandComponent } from './components/brand/brand.component';
import { ColorComponent } from './components/color/color.component';
import { CustomerComponent } from './components/customer/customer.component';
import { CustomerDetailDtoComponent } from './components/customer-detail-dto/customer-detail-dto.component';
import { RentalDetailDtoComponent } from './components/rental-detail-dto/rental-detail-dto.component';
import { CarDetailDtoComponent } from './components/car-detail-dto/car-detail-dto.component';

@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    RentalComponent,
    NaviComponent,
    BrandComponent,
    ColorComponent,
    CustomerComponent,
    CustomerDetailDtoComponent,
    RentalDetailDtoComponent,
    CarDetailDtoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
