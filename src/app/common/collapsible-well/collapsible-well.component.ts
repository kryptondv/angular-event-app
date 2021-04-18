import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-collapsible-well',
  templateUrl: './collapsible-well.component.html',
  styleUrls: ['./collapsible-well.component.scss']
})
export class CollapsibleWellComponent implements OnInit {
  @Input() title: string;
  showContent = false;
  constructor() { }

  ngOnInit(): void {
  }

  toggleContent() {
    this.showContent = !this.showContent;
  }
}
