import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EventsAppComponent } from './events-app-component';
import { ProductComponent } from './products/products-app-component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    imports: [BrowserModule, HttpClientModule],
    declarations: [EventsAppComponent, ProductComponent],
    bootstrap: [EventsAppComponent]
})


export class AppModule{
 
}