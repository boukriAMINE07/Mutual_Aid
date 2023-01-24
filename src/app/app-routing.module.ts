import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {CreateComponent} from "./components/mutualAid/create/create.component";

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
  , { path: 'dashboard', component: DashboardComponent },
  { path: 'mutualAid/create', component: CreateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
