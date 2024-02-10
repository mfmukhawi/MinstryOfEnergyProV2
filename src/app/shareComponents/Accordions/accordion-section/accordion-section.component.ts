import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-accordion-section',
  templateUrl: './accordion-section.component.html',
  styleUrl: './accordion-section.component.scss'
})
export class AccordionSectionComponent {
  @Input() title: string = '';
  @Input() status: string |null |undefined ;
  @Input() accordionId: string = '';
  @Input() changeThemToYellow: boolean = false;



  isAccordionExpanded = false;

  toggleAccordion() {
    this.isAccordionExpanded = !this.isAccordionExpanded;
    console.log("isAccordionExpanded" ,this.isAccordionExpanded);
  }
}
