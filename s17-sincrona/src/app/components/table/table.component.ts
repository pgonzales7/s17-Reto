import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactUser } from '../form/contact';
import { contactStorage } from '../form/contactStorage';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor( private router: Router, private contactStorage: contactStorage ) { }

  @Input() ContactUserArray : ContactUser[] = [];

  headTable = ['Nombre', 'Email', 'Telefono', 'Sujeto', 'Mensaje', 'Pais', 'Eliminar'];

  Eliminar(indice:number){
    this.ContactUserArray.splice(indice, 1);
    this.contactStorage.setContactUserStorage(this.ContactUserArray)
  }

  ngOnInit(): void {
  }

}