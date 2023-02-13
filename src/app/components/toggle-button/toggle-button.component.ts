import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-toggle-button',
  templateUrl: './toggle-button.component.html',
  styleUrls: ['./toggle-button.component.css']
})
export class ToggleButtonComponent implements OnInit {

  constructor(public modal: ModalService) { }

  ngOnInit(): void {
  }

  openModal($event: Event){
    $event.preventDefault();

    this.modal.toggleModal('auth');
  }

}
