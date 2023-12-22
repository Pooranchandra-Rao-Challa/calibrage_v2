import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IndustriesComponent } from './industries/industries.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: HomeComponent },
    {
      path: 'home',
      component: HomeComponent,
      data: { page: 'home' }
    },
    { path: 'industries', component: IndustriesComponent },
    { path: 'contactUs', component: ContactusComponent },

  ])],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
