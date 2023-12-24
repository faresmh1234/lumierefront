import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { CategoryComponent } from './category/category.component';
import { AboutComponent } from './about/about.component';
import { TeamComponent } from './team/team.component';
import { TrainingComponent } from './training/training.component';
import { EvaluationComponent } from './evaluation/evaluation.component';
import { HttpClientModule } from '@angular/common/http';
import { DetailCategoryComponent } from './detail-category/detail-category.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateCatComponent } from './update-cat/update-cat.component';
import { CreateCategoryComponent } from './create-category/create-category.component';
import { RecherchePipe } from './pipes/recherche.pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { DetailTraningComponent } from './detail-traning/detail-traning.component';
import { CreatetrainingComponent } from './createtraining/createtraining.component';
import { EmployeComponent } from './employe/employe.component';
import { AjoutEmployeComponent } from './ajout-employe/ajout-employe.component';
import { DepatementComponent } from './depatement/depatement.component';
import { DepartementComponent } from './departement/departement.component';
import { AjoutDepartementComponent } from './ajout-departement/ajout-departement.component';
import { DetaildepartementComponent } from './detaildepartement/detaildepartement.component';
import { ModifieremployeComponent } from './modifieremploye/modifieremploye.component';
import { SlidebarComponent } from './slidebar/slidebar.component';
import { CreateEmployerComponent } from './create-employer/create-employer.component';
import { DatailEmployerComponent } from './datail-employer/datail-employer.component';
import { TraningInscriptionComponent } from './traning-inscription/traning-inscription.component';
import { LoginComponent } from './login/login.component';
import { DemandeFormationComponent } from './demande-formation/demande-formation.component';
import { SiteComponent } from './site/site.component';
import { DetailEmployerComponent } from './detail-employer/detail-employer.component';
import { GeneralDashboardComponent } from './general-dashboard/general-dashboard.component';
import { TrainingPlaningComponent } from './training-planing/training-planing.component';
import { TrainningFormationComponent } from './trainning-formation/trainning-formation.component';
import { DashboardFormationComponent } from './dashboard-formation/dashboard-formation.component';
import { UpdateEmployerComponent } from './update-employer/update-employer.component';
import { UpdateTrainingComponent } from './update-training/update-training.component';
import { CreateTrainingDemandComponent } from './create-training-demand/create-training-demand.component';
import { AjoutdemandeComponent } from './ajoutdemande/ajoutdemande.component';
import { AddDemandMemberComponent } from './add-demand-member/add-demand-member.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { EmployersubintrainingComponent } from './employersubintraining/employersubintraining.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatAutocompleteModule} from '@angular/material/autocomplete'
import {MatSelectModule} from '@angular/material/select';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    CategoryComponent,
    AboutComponent,
    TeamComponent,
    TrainingComponent,
    EvaluationComponent,
    DetailCategoryComponent,
    UpdateCatComponent,
    CreateCategoryComponent,
    RecherchePipe,
    DetailTraningComponent,
    CreatetrainingComponent,
    EmployeComponent,
    AjoutEmployeComponent,
    DepatementComponent,
    DepartementComponent,
    AjoutDepartementComponent,
    DetaildepartementComponent,
    ModifieremployeComponent,
    SlidebarComponent,
    CreateEmployerComponent,
    DatailEmployerComponent,
    TraningInscriptionComponent,
    LoginComponent,
    DemandeFormationComponent,
    SiteComponent,
    DetailEmployerComponent,
    GeneralDashboardComponent,
    TrainingPlaningComponent,
    TrainningFormationComponent,
    DashboardFormationComponent,
    UpdateEmployerComponent,
    UpdateTrainingComponent,
    CreateTrainingDemandComponent,
    AjoutdemandeComponent,
    AddDemandMemberComponent,
    EmployersubintrainingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
     ReactiveFormsModule,
   Ng2SearchPipeModule,
FormsModule,
NgxPaginationModule,
MatFormFieldModule,
MatAutocompleteModule,
MatSelectModule



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
