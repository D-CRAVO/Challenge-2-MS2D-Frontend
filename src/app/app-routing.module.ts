import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LearnerListComponent } from './components/learner-list/learner-list.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path: 'learners', component: LearnerListComponent},
  {path: 'accueil', component: AppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
