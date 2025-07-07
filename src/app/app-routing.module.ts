import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { combineLatest } from 'rxjs';
import path from 'path';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ServicesService } from './service/services.service';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { QuotaComponent } from './quota/quota.component';
import { LaunchComponent } from './launch/launch.component';
import { SurveyComponent } from './survey/survey.component';
import { ConfigurationComponent } from './configuration/configuration.component';
import { PlatformComponent } from './platform/platform.component';
import { AssetsComponent } from './assets/assets.component';
import { GraphComponent } from './graph/graph.component';


const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'login', component:LoginComponent},
  {path:'dashboard', component:HomeComponent,
    children:[
      {path:'', component:DashboardComponent},
      {path:'dashboard', component:DashboardComponent},
      {path:'details', component:DetailsComponent},
      {path:'assets', component:AssetsComponent},
      {path:'quota', component:QuotaComponent},
      {path:'launcher', component:LaunchComponent},
      {path:'survey-tags', component:SurveyComponent},
      {path:'configure', component:ConfigurationComponent},
      {path:'platform', component:PlatformComponent},
      {path:'graph', component:GraphComponent},

    ]
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[ServicesService]
})
export class AppRoutingModule { }
