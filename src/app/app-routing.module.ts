import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {CreateComponent} from "./components/mutualAid/create/create.component";
import {DetailsComponent} from "./components/mutualAid/details/details.component";
import {PaiementComponent} from "./components/mutualAid/paiement/paiement.component";

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'mutualAid/create', component: CreateComponent },
    { path: 'mutualAid/details/:id', component: DetailsComponent },
  {path:'mutualAid/paiement',component:PaiementComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
