import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {CreateComponent} from "./components/mutualAid/create/create.component";
import {DetailsComponent} from "./components/mutualAid/details/details.component";
import {PaiementComponent} from "./components/mutualAid/paiement/paiement.component";
import {SignupComponent} from "./components/signup/signup.component";
import {SigninComponent} from "./components/signin/signin.component";
import {ProfileComponent} from "./components/profile/profile.component";

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'mutualAid/create', component: CreateComponent },
    { path: 'mutualAid/details/:id', component: DetailsComponent },
  {path:'mutualAid/paiement',component:PaiementComponent},
  {path:'sign-up',component:SignupComponent},
  {path:'sign-in',component:SigninComponent},
  {path:'profile',component:ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
