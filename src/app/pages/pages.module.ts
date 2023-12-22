import { NgModule } from '@angular/core';
import { IndustriesComponent } from './industries/industries.component';
import { ContactusComponent } from './contactus/contactus.component';
import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel/carousel.component';



@NgModule({
  declarations: [
    IndustriesComponent,
    ContactusComponent,
    HomeComponent,
    CarouselComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
  ]
})
export class PagesModule { }
