import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
 import { AppRoutingModule  } from './app-routing.module';
// import { AppConfig } from './app.config';
import { routes } from './app.routes';

 import { AppComponent } from './app.component';
// import { AppRoutingModule } from './app.routing.module';
import { CommonModule } from '@angular/common';
import { ThreeDotsVerticalButtonComponent } from './shareComponents/buttons/three-dots-vertical-button/three-dots-vertical-button.component';
import { ArrowButtonComponent } from './shareComponents/buttons/arrow-button/arrow-button.component';
import { AccordionSectionComponent } from './shareComponents/Accordions/accordion-section/accordion-section.component';
import { LegalManagementProcessComponent } from './pages/legal-management-process/legal-management-process.component';
import { AccordionBoxComponent } from './shareComponents/Accordions/accordion-box/accordion-box.component';
import { InfoCardComponent } from './shareComponents/cards/info-card/info-card.component';
import { ClassifyCardComponent } from './shareComponents/cards/classify-card/classify-card.component';
import { StatusCardComponent } from './shareComponents/cards/status-card/status-card.component';

@NgModule({
  declarations: [
    AppComponent,
    ThreeDotsVerticalButtonComponent,
    AccordionSectionComponent,
    LegalManagementProcessComponent,
    AccordionBoxComponent,
    ArrowButtonComponent,
    InfoCardComponent,
    ClassifyCardComponent,
    StatusCardComponent,


  ],
  imports: [
    BrowserModule,
    RouterModule,
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
