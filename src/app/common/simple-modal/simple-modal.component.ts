import { Component, Inject, Input } from '@angular/core';
import { JQ_TOKEN } from '../jQuery.service';

@Component({
  selector: 'app-simple-modal',
  templateUrl: './simple-modal.component.html',
  styleUrls: ['./simple-modal.component.scss'],
})
export class SimpleModalComponent {
  @Input() title: string;
  @Input() modalId: string;

  constructor(@Inject(JQ_TOKEN) private $: any) {}

  closeModal() {
    this.$(`#${this.modalId}`).modal('hide');
  }
}
