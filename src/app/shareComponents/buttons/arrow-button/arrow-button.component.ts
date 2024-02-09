import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-arrow-button',
  template: `<div
                class="box-arrow"
                [ngClass]="{ 'box-arrow-open': isOpen }"
                (click)="onButtonClick()"
              ></div>`,
  styleUrl: './arrow-button.component.scss',
})
export class ArrowButtonComponent {
  @Output() buttonClick = new EventEmitter<void>();
  isOpen: boolean = false;

  onButtonClick() {
    this.isOpen = !this.isOpen;
    this.buttonClick.emit(); // Emit without any parameter
  }
}
