import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateEducationComponent } from './components/education/update-education/update-education.component';
import { UpdateExpComponent } from './components/experience/update-exp/update-exp.component';
import { IniciarSesionComponent } from './components/iniciar-sesion/iniciar-sesion.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { UpdateProjectsComponent } from './components/projects/update-projects/update-projects.component';
import { AboutModelComponent } from './components/about/about-model/about-model.component';
import { UpdateAboutComponent } from './components/about/update-about/update-about.component';
import { UpdateSkillComponent } from './components/skills/update-skill/update-skill.component';
import { UpdateLanguajeComponent } from './components/languaje/update-languaje/update-languaje.component';

const routes: Routes = [
  {path:'portfolio', component:PortfolioComponent},
  // {path:'iniciarSesion', component:IniciarSesionComponent},
  {path: '', redirectTo:'portfolio', pathMatch: 'full'},
  {path: 'updExp/:id', component: UpdateExpComponent},
  {path: 'updEdu/:id', component: UpdateEducationComponent},
  {path: 'updPrj/:id', component: UpdateProjectsComponent},
  {path: 'updAbt/:id', component: UpdateAboutComponent},
  {path: 'updSkill/:id', component:UpdateSkillComponent},
  {path: 'updLang/:id', component: UpdateLanguajeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
