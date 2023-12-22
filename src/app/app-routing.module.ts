import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BpoComponent } from './services/bpo/bpo.component';
import { BussinessintelligenceComponent } from './services/bussinessintelligence/bussinessintelligence.component';
import { ConsultancyComponent } from './services/consultancy/consultancy.component';
import { ContractprogrammingComponent } from './services/contractprogramming/contractprogramming.component';
import { EcommerceapplicationComponent } from './services/ecommerceapplication/ecommerceapplication.component';
import { MobileappComponent } from './services/mobileapp/mobileapp.component';
import { EducationComponent } from './services/education/education.component';
import { OutsourcingComponent } from './services/outsourcing/outsourcing.component';
import { OtheritservicesComponent } from './services/otheritservices/otheritservices.component';
import { PlcprogrammingComponent } from './services/plcprogramming/plcprogramming.component';
import { ProjectmanagementComponent } from './services/projectmanagement/projectmanagement.component';
import { TechnicalsupportComponent } from './services/technicalsupport/technicalsupport.component';
import { WebdesignComponent } from './services/webdesign/webdesign.component';
import { AboutusComponent } from './company/aboutus/aboutus.component';
import { CareersComponent } from './company/careers/careers.component';
import { LeadershipteamComponent } from './company/leadershipteam/leadershipteam.component';

const routes: Routes = [
  { path: '',loadChildren: () => import('src/app/pages/pages.module').then(m => m.PagesModule) },
  { path: 'pages', data: { breadcrumb: 'Pages' }, loadChildren: () => import('src/app/pages/pages.module').then((m) => m.PagesModule) },
  { path: 'aboutUs', component: AboutusComponent },
  { path: 'careers', component: CareersComponent },
  { path: 'leadershipteam', component: LeadershipteamComponent },
  { path: 'bpo', component: BpoComponent },
  { path: 'bussinessintelligence', component: BussinessintelligenceComponent },
  { path: 'consultancy', component: ConsultancyComponent },
  { path: 'contract', component: ContractprogrammingComponent },
  { path: 'ecommerce', component: EcommerceapplicationComponent },
  { path: 'education', component: EducationComponent },
  { path: 'mobile', component: MobileappComponent },
  { path: 'other', component: OtheritservicesComponent },
  { path: 'outsourcing', component: OutsourcingComponent },
  { path: 'plc', component: PlcprogrammingComponent },
  { path: 'contractprogramming', component: ContractprogrammingComponent },
  { path: 'project', component: ProjectmanagementComponent },
  { path: 'technical', component: TechnicalsupportComponent },
  { path: 'webdesign', component: WebdesignComponent },
  { path: '**', redirectTo: 'pages' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
