import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-classify-card',
  template: `
    <div class="card">
  <div class="card-body" *ngIf="cardItem">
    <ng-container *ngFor="let item  of cardItem" >
      <ul class="card-title">
          <p class="m-0 pb-1">{{ item.title }}</p>   <!--  to add space use p  -->
          <li class="card-text" *ngFor="let subItem of item.subItems"> {{ subItem }} </li>
      </ul>
    </ng-container>
  </div>
</div>


  `,
  styleUrl: './classify-card.component.scss'
})
export class ClassifyCardComponent {
  @Input() cardItem: any[] = [];


}
