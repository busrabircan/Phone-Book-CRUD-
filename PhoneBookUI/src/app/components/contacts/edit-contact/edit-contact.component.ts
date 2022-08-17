import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from 'src/app/models/contact.model';
import { ContactsService } from 'src/app/sservices/contacts.service';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {

  contactDetails: Contact ={
    id:'',
    firstName:'',
    lastName:'',
    phone:0,
    email:'',
    birthDate:'',
    place:''

  };
  constructor(private route: ActivatedRoute, private contactService : ContactsService
    ,private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next:(params) =>{
        const id=params.get('id');

        if(id) {
          this.contactService.getContact(id)
          .subscribe({
            next: (response) => {
              this.contactDetails = response;

            }
          });

        }
      }
    });
  }

  updateContact(){
    this.contactService.updateContact(this.contactDetails.id, this.contactDetails)
    .subscribe({
      next: (response) => {
        this.router.navigate(['contacts']);

      }
    });


  }

  deleteContact(id: string){
    var result = confirm('Are you sure you want to delete the contact?');
    if(result==true){
      this.contactService.deleteContact(id)
      .subscribe({
        next:(response) => {
          alert("Contact was deleted .")
          this.router.navigate(['contacts']);
        }
      })
    }
    else if (result == false) {
      this.contactService.getAllContacts()
      .subscribe({
        next: (response) => {
          alert("Contact wasn't deleted ")
          this.router.navigate(['contacts']);
        }
      })
    }
  }
//     this.contactService.deleteContact(id)
//     .subscribe({
//       next: (response) => {
//         this.router.navigate(['contacts']);
//       }
//     });
//   }

// }
//    function checker() {
//   var result= confirm('Are you sure?');
//   if(result==false) {
//     event.preventDefault();
//   }
}