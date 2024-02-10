import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-status-card',
  template: `

  <div class="card my-1">
  <div class="card-body">
       <h4 class="card-title">{{title}}</h4>
       <p class="card-description">{{description}}</p>
   </div>
</div>

`,
  styleUrl: './status-card.component.scss'
})
export class StatusCardComponent {

  @Input() title: string = "";
  @Input() description: string = "";



}
