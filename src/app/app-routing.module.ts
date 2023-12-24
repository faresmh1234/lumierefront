import { NgModule, createComponent } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { CategoryComponent } from './category/category.component';
import { AboutComponent } from './about/about.component';
import { TeamComponent } from './team/team.component';
import { EvaluationComponent } from './evaluation/evaluation.component';
import { DetailCategoryComponent } from './detail-category/detail-category.component';
import { UpdateCatComponent } from './update-cat/update-cat.component';
import { CreateCategoryComponent } from './create-category/create-category.component';
import { TrainingComponent } from './training/training.component';
import { DetailTraningComponent } from './detail-traning/detail-traning.component';
import { CreatetrainingComponent } from './createtraining/createtraining.component';
import { EmployeComponent } from './employe/employe.component';
import { DepartementComponent } from './departement/departement.component';
import { AjoutDepartementComponent } from './ajout-departement/ajout-departement.component';
import { DetaildepartementComponent } from './detaildepartement/detaildepartement.component';
import { AjoutEmployeComponent } from './ajout-employe/ajout-employe.component';
import { DemandeFormationComponent } from './demande-formation/demande-formation.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { TraningInscriptionComponent } from './traning-inscription/traning-inscription.component';
import { DetailEmployerComponent } from './detail-employer/detail-employer.component';
import { GeneralDashboardComponent } from './general-dashboard/general-dashboard.component';
import { TrainingPlaningComponent } from './training-planing/training-planing.component';
import { UpdateEmployerComponent } from './update-employer/update-employer.component';
import { UpdateTrainingComponent } from './update-training/update-training.component';
import { CreateEmployerComponent } from './create-employer/create-employer.component';
import { DashboardFormationComponent } from './dashboard-formation/dashboard-formation.component';
import { CreateTrainingDemandComponent } from './create-training-demand/create-training-demand.component';
import { AddDemandMemberComponent } from './add-demand-member/add-demand-member.component';
import { EmployersubintrainingComponent } from './employersubintraining/employersubintraining.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', canActivate: [AuthGuard], component: HomeComponent },
  { path: 'footer', canActivate: [AuthGuard], component: FooterComponent },
  { path: 'header', canActivate: [AuthGuard], component: HeaderComponent },
  { path: 'category', canActivate: [AuthGuard], component: CategoryComponent },
  { path: 'about', canActivate: [AuthGuard], component: AboutComponent },
  { path: 'team', canActivate: [AuthGuard], component: TeamComponent },
  {
    path: 'evaluation',
    canActivate: [AuthGuard],
    component: EvaluationComponent,
  },
  {
    path: 'datailCat/:id',
    canActivate: [AuthGuard],
    component: DetailCategoryComponent,
  },
  {
    path: 'updateCat/:id',
    canActivate: [AuthGuard],
    component: UpdateCatComponent,
  },
  {
    path: 'create',
    canActivate: [AuthGuard],
    component: CreateCategoryComponent,
  },
  { path: 'training', canActivate: [AuthGuard], component: TrainingComponent },
  {
    path: 'datailtraining/:id',
    canActivate: [AuthGuard],
    component: DetailTraningComponent,
  },
  {
    path: 'createtraining',
    canActivate: [AuthGuard],
    component: CreatetrainingComponent,
  },
  { path: 'employe', canActivate: [AuthGuard], component: EmployeComponent },
  {
    path: 'departement',
    canActivate: [AuthGuard],
    component: DepartementComponent,
  },
  {
    path: 'createdepartement',
    canActivate: [AuthGuard],
    component: AjoutDepartementComponent,
  },
  {
    path: 'detaildepartement/:id',
    canActivate: [AuthGuard],
    component: DetaildepartementComponent,
  },
  {
    path: 'creatermploye',
    canActivate: [AuthGuard],
    component: CreateEmployerComponent,
  },
  {
    path: 'demandeformation',
    canActivate: [AuthGuard],
    component: DemandeFormationComponent,
  },
  {
    path: 'inscription',
    canActivate: [AuthGuard],
    component: TraningInscriptionComponent,
  },
  {
    path: 'detailemployer/:id',
    canActivate: [AuthGuard],
    component: DetailEmployerComponent,
  },
  {
    path: 'generaldashboard',
    canActivate: [AuthGuard],
    component: GeneralDashboardComponent,
  },
  {
    path: 'planningformation',
    canActivate: [AuthGuard],
    component: TrainingPlaningComponent,
  },
  {
    path: 'updateemploye/:id',
    canActivate: [AuthGuard],
    component: UpdateEmployerComponent,
  },
  {
    path: 'updatetraining/:id',
    canActivate: [AuthGuard],
    component: UpdateTrainingComponent,
  },
  {
    path: 'dashbordformation',
    canActivate: [AuthGuard],
    component: DashboardFormationComponent,
  },
  {
    path: 'dashbordgenerale',
    canActivate: [AuthGuard],
    component: GeneralDashboardComponent,
  },
  {
    path: 'createtrainingdemand',
    canActivate: [AuthGuard],
    component: CreateTrainingDemandComponent,
  },
  {
    path: 'addmembers',
    canActivate: [AuthGuard],
    component: AddDemandMemberComponent,
  },
  {
    path: 'employersubintraining/:id',
    canActivate: [AuthGuard],
    component: EmployersubintrainingComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
