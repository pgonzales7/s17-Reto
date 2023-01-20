import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactUser } from '../form/contact';
import { contactStorage } from '../form/contactStorage';

@Component({
  selector: 'app-table-filter',
  templateUrl: './table-filter.component.html',
  styleUrls: ['./table-filter.component.css']
})
export class TableFilterComponent implements OnInit {

  constructor( private activatedRouter: ActivatedRoute, private contactStorage: contactStorage ) { }

  headTable = ['Nombre', 'Email', 'Telefono', 'Sujeto', 'Mensaje', 'Pais'];

  ContactUserArray: ContactUser[] = [];

  filteredUsers!: any[];

  getContactUserStorage() {
      this.ContactUserArray = this.contactStorage.getContactUserStorage(); // Llama los datos del localStorage
      this.filteredUsers = this.ContactUserArray.filter(data => data.pais === this.id); // Filtra por países
  }

  id!: string;

  ngOnInit(): void {
    this.id = this.activatedRouter.snapshot.params['id'];
    this.getContactUserStorage();
  }

}