import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-accordion-section',
  templateUrl: './accordion-section.component.html',
  styleUrl: './accordion-section.component.scss'
})
export class AccordionSectionComponent {
  @Input() title: string = '';
  @Input() subtitle: string |null |undefined ;
  @Input() accordionId: string = '';


  isAccordionExpanded = false;

  toggleAccordion() {
    this.isAccordionExpanded = !this.isAccordionExpanded;
    console.log("isAccordionExpanded" ,this.isAccordionExpanded);
  }
}
