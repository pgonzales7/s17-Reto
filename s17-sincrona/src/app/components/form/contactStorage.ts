import { Injectable } from "@angular/core";
import { ContactUser } from "./contact";

@Injectable({
    providedIn: 'root'
})

export class contactStorage {
    CLAVE_LOCAL_STORAGE = 'User'

    constructor() {}

    getContactUserStorage(): ContactUser[] {
        return JSON.parse(localStorage.getItem(this.CLAVE_LOCAL_STORAGE) || '[]')
    }

    setContactUserStorage(users_storage: ContactUser[]) {
        localStorage.setItem(this.CLAVE_LOCAL_STORAGE, JSON.stringify(users_storage))
    }
}