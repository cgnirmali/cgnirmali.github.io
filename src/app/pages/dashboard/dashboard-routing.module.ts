import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from '../../components/about/about.component';
import { EducationComponent } from '../../components/education/education.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { HomeComponent } from '../../components/home/home.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { SkillComponent } from '../../components/skill/skill.component';
import { WorksComponent } from '../../components/works/works.component';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [{
  path: '',
  component:DashboardComponent,
  children:[
    {
      path:'home',
      component:HomeComponent,
      children:[
        {path:'navbar',component:NavbarComponent},
        {path:'footer',component:FooterComponent},
      ]
    },
    {
      path:'about',
      component:AboutComponent,
    },
    {
      path:'education',
      component:EducationComponent,
    },
    {
      path:'skill',
      component:SkillComponent
    },
    {
      path:'works',
      component:WorksComponent
    },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
