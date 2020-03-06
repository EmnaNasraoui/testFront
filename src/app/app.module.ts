import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FiltreWithFLPipe } from './filtre-with-fl.pipe';
import { ContactComponent } from './contact/contact.component';
import { AddressBookComponent } from './address-book/address-book.component';

@NgModule({
  declarations: [
    AppComponent,
    FiltreWithFLPipe,
    ContactComponent,
    AddressBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule, Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
