import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddContactComponent } from './components/contacts/add-contact/add-contact.component';
import { ContactsListComponent } from './components/contacts/contacts-list/contacts-list.component';
import { EditContactComponent } from './components/contacts/edit-contact/edit-contact.component';

const routes: Routes = [
  // {
  //   path:'',
  //   component: ContactsListComponent

  // },
  {
    path:'contacts',
    component: ContactsListComponent

  },
  {
    path:'contacts/add',
    component: AddContactComponent

  },
  {
    path:'contacts/edit/:id',
    component: EditContactComponent

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
