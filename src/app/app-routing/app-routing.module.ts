import { NgModule } from '@angular/core';
import { HomeComponent } from '../home/home.component'
import { AboutComponent } from '../about/about.component'
import { ProjectComponent } from '../project/project.component'
import { ResumeComponent } from '../resume/resume.component'
import { SkillComponent } from '../skill/skill.component'
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'skills', component: SkillComponent },
  { path: 'projects', component: ProjectComponent },
  { path: 'resume', component: ResumeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
