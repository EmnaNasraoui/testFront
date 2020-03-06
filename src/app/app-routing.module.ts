import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { AddressBookComponent } from './address-book/address-book.component';

const routes: Routes = [
  // { path: '**', redirectTo: 'AddressBook' },
  { path: '', pathMatch: 'full', redirectTo: 'AddressBook' },
  { path: 'AddressBook', component: AddressBookComponent },
  { path: 'contact/:profile.name/:profile.number', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
