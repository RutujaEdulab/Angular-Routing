import { AboutCompanyComponent } from './about-company/about-company.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NoPageComponent } from './no-page/no-page.component';
import { UserComponent } from './user/user.component';
import { AboutMeComponent } from './about-me/about-me.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },

  {
    path: 'About',
    component: AboutComponent,
    children:[
      {
        path:'Company',
        component:AboutCompanyComponent
      },
      {
        path:'Me',
        component:AboutMeComponent
      }
    ]
  },
  {
    path: 'User',
    component: UserComponent,
  },
  {
    path: 'User/:id',
    component: UserComponent,
  },
  {
    path: '**',
    component: NoPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
