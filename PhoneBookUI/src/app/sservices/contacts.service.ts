import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { Contact } from '../models/contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  baseApiUrl: string= environment.baseApiUrl;

  constructor(private http: HttpClient) { }

  getAllContacts(): Observable<Contact[]> {
    return this.http.get<Contact[]>(this.baseApiUrl + '/api/contacts');
  }

  addContact(addContactRequest: Contact) : Observable<Contact> {
    addContactRequest.id='00000000-0000-0000-0000-000000000000';
    return this.http.post<Contact>(this.baseApiUrl + '/api/contacts',addContactRequest);
  }

  getContact(id : string):Observable<Contact>{
    return this.http.get<Contact>(this.baseApiUrl+'/api/contacts/' + id);
  }

  updateContact(id:string, updateContactRequest: Contact): Observable<Contact>
  {
    return this.http.put<Contact>(this.baseApiUrl+ '/api/contacts/'+ id, updateContactRequest);
  }
  deleteContact(id: string): Observable<Contact>{
    return this.http.delete<Contact>(this.baseApiUrl+ '/api/contacts/'+id);
  }
}
