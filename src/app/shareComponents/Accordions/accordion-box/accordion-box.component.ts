import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-accordion-box',
  templateUrl: './accordion-box.component.html',
  styleUrl: './accordion-box.component.scss'
})
export class AccordionBoxComponent {
  @Input() title: string = '';
  @Input() subtitle: string |null |undefined ;
  @Input() accordionId: string = ''; // Unique ID for each accordion
  // @Input() collapseId: string = ''; // Unique ID for each accordion

  onThreeDotClick() {}
}
