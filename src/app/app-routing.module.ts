import { NgModule } from '@angular/core';
import {Routes ,RouterModule } from '@angular/router';
import { HamburgersAboutComponent } from './hamburgers-about/hamburgers-about.component';
import { HamburgersBurgersComponent } from './hamburgers-burgers/hamburgers-burgers.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'burgers',
    pathMatch: 'full',
  },
  { 
    path: 'burgers',  
    component: HamburgersBurgersComponent 
  },
  { 
    path: 'about',
    component: HamburgersAboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
