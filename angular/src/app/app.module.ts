import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { EducationComponent } from './components/education/education.component';
import { SkillsComponent } from './components/skills/skills.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { ProjectsComponent } from './components/projects/projects.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { IniciarSesionComponent } from './components/iniciar-sesion/iniciar-sesion.component';
import { interceptorProvider } from './service/interceptor-service';
import { ExpModalComponent } from './components/experience/exp-modal/exp-modal.component';
import { UpdateExpComponent } from './components/experience/update-exp/update-exp.component';
import { EduModalComponent } from './components/education/edu-modal/edu-modal.component';
import { UpdateEducationComponent } from './components/education/update-education/update-education.component';
import { PrjModalComponent } from './components/projects/prj-modal/prj-modal.component';
import { UpdateProjectsComponent } from './components/projects/update-projects/update-projects.component';
import { AboutModelComponent } from './components/about/about-model/about-model.component';
import { UpdateAboutComponent } from './components/about/update-about/update-about.component';
import { SkillModalComponent } from './components/skills/skill-modal/skill-modal.component';
import { UpdateSkillComponent } from './components/skills/update-skill/update-skill.component';
import { LanguajeComponent } from './components/languaje/languaje.component';
import { LanguajeModalComponent } from './components/languaje/languaje-modal/languaje-modal.component';
import { UpdateLanguajeComponent } from './components/languaje/update-languaje/update-languaje.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    ExperienceComponent,
    EducationComponent,
    SkillsComponent,
    ProjectsComponent,
    PortfolioComponent,
    IniciarSesionComponent,
    ExpModalComponent,
    UpdateExpComponent,
    EduModalComponent,
    UpdateEducationComponent,
    PrjModalComponent,
    UpdateProjectsComponent,
    AboutModelComponent,
    UpdateAboutComponent,
    SkillModalComponent,
    UpdateSkillComponent,
    LanguajeComponent,
    LanguajeModalComponent,
    UpdateLanguajeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule,
    FormsModule,

  ],
  providers: [
    interceptorProvider,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
