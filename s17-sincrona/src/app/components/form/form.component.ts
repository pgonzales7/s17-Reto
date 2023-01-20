import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactUser } from './contact';
import { contactStorage } from './contactStorage';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  hide = true;

  constructor(private formBuilder: FormBuilder, private contactStorage: contactStorage) { }

  contactForm!: FormGroup;
  paises = ['perú', 'chile', 'uruguay', 'colombia', 'mexico'];

  initForm(): FormGroup {
    return this.formBuilder.group({
      nombre: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern("^[aA-zZ0-9._%+-ñÑ]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      telefono: ['', [Validators.required, Validators.pattern("^[0-9]{9}$")]],
      sujeto: ['', [Validators.required]],
      mensaje: ['', [Validators.required]],
      paisSelected: ['', [Validators.required]]
    })
  }

  get nombre() { return this.contactForm.get('nombre')};
  get email() { return this.contactForm.get('email')};
  get telefono() { return this.contactForm.get('telefono')};
  get sujeto() { return this.contactForm.get('sujeto')};
  get mensaje() { return this.contactForm.get('mensaje')};
  get paisSelected() { return this.contactForm.get('paisSelected')};

  ContactUserArray: ContactUser[] = [];
  
  onSubmit() {
    const newUser = new ContactUser(this.nombre?.value, this.email?.value, this.telefono?.value, this.sujeto?.value, this.mensaje?.value, this.paisSelected?.value);
    this.ContactUserArray.push(newUser);
    this.contactStorage.setContactUserStorage(this.ContactUserArray);
  }

  getContactUserStorage() {
    this.ContactUserArray = this.contactStorage.getContactUserStorage();
  }

  ngOnInit(): void {
    this.contactForm = this.initForm();
    this.getContactUserStorage();
  }

}
