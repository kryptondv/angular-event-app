import { Directive, Inject, OnInit, ElementRef } from '@angular/core';
import { JQ_TOKEN } from './jQuery.service';

@Directive({
  selector: '[modalTrigger]',
})
export class ModalTriggerDirective implements OnInit {
  private el: HTMLElement;
  constructor(@Inject(JQ_TOKEN) private $: any, ref: ElementRef) {
    this.el = ref.nativeElement;
  }

  ngOnInit() {
    this.el.addEventListener('click', () => {
      this.$('#simple-modal').modal({});
    })
  }
}
