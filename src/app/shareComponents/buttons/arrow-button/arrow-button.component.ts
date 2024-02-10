import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-arrow-button',
  template: `<div
                class="box-arrow"
                [ngClass]="{ 'box-arrow-open': isOpen , 'box-arrow-yellow':changeThemToYellow }"
                (click)="onButtonClick()"
              ></div>`,
  styleUrl: './arrow-button.component.scss',
})
export class ArrowButtonComponent {
  @Output() buttonClick = new EventEmitter<void>();
  isOpen: boolean = false;
  @Input() changeThemToYellow: boolean = false;


  onButtonClick() {
    this.isOpen = !this.isOpen;
    this.buttonClick.emit(); // Emit without any parameter
  }
}
