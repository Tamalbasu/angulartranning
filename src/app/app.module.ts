import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RouterModule,Route } from '@angular/router';
import { CustomersComponent } from './customer/customers/customers.component';

import { CustomersCardComponent } from './customer/customers-card/customers-card.component';
import { CustomersListComponent } from './customer/customers-list/customers-list.component';
import { HomeComponent } from './home/home.component';
//import { OrderComponent } from './orders/order/order.component';

import { OrderComponent } from './orders/order/order.component';
import { LinkAvtivate } from './link.activate';
import { CustomerEditComponent } from './customer/customer-edit/customer-edit.component';
import {HttpClientModule} from '@angular/common/http';
import { DataService } from 'src/common/data.service';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { ThreeComponent } from './three/three.component';
import { ReportComponent } from './orders/report/report.component';
import { HoverDirective } from './hover.directive';


const routes:Route[]=[
  {
  path:'home',
  component:HomeComponent
  },
  {
    path:'customers',
    component:CustomersComponent,
    //canActivate:[LinkAvtivate]
    },
    {
      path:'orders',
      loadChildren:()=>import('./orders/orders.module').then(m=>m.OrdersModule)
      },
      {
        path:'customers/edit/:id',
        component: CustomerEditComponent
      },
      {
        path:'**',
        component:HomeComponent
        }
]

@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
   
    CustomersCardComponent,
   
    CustomersListComponent,
   
    HomeComponent,
   
    CustomerEditComponent,
   
    OneComponent,
   
    TwoComponent,
   
    ThreeComponent,
   
    HoverDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [LinkAvtivate,DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
