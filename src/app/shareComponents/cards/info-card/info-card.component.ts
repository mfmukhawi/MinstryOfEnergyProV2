import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-info-card',
  template: `

  <div class="card my-1">
  <div class="card-body">
    <div class="d-flex justify-content-between align-items-center mb-2">
      <h4 class="card-title">{{title}}</h4>
      <button *ngIf="isEditable" class="edit-btn"><i class="bi bi-pen"></i> </button>
  </div>
    <div class="card-content" *ngFor="let item of contentArr">
      <p class="card-content-title">{{ item.content }}</p>
      <ul>
          <li *ngFor="let subItem of item.subContent" class="card-content-item">- {{ subItem }} </li>
      </ul>
    </div>
  </div>
</div>

`,
  styleUrl: './info-card.component.scss'
})
export class InfoCardComponent {
  @Input() contentArr: any[] = [];
  @Input() title: string = "";
  @Input() isEditable: boolean = false; // default value to show edit button

}
