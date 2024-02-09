import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LegalManagementProcessComponent } from './pages/legal-management-process/legal-management-process.component';
import { routes } from './app.routes'; // Import your routes

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
