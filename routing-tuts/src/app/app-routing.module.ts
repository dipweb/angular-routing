import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HistoryComponent } from './history/history.component'
import { ScienceComponent } from './science/science.component'
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'
import { PhyscicsComponent } from './science/physcics/physcics.component';
import { ChemistryComponent } from './science/chemistry/chemistry.component';

const routes: Routes = [
  { path: 'history', component: HistoryComponent },
  { path: 'science', component: ScienceComponent },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: 'physcics', component: PhyscicsComponent },
      { path: 'chemistry', component: ChemistryComponent }
    ]
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
