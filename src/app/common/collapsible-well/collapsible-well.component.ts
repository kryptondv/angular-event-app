import { Component } from '@angular/core';

@Component({
  selector: 'app-collapsible-well',
  templateUrl: './collapsible-well.component.html',
  styleUrls: ['./collapsible-well.component.scss'],
})
export class CollapsibleWellComponent {
  showContent = false;

  toggleContent() {
    this.showContent = !this.showContent;
  }
}
