import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private visible = false; //prevent other components from accessing it

  constructor() { }

  // create a method to return visible value because it is private
  // makes it easier to control any changes. Easier to track changes
  isModalOpen(){
    return this.visible;
  }

  toggleModal(){
    this.visible = !this.visible;
  }
}
