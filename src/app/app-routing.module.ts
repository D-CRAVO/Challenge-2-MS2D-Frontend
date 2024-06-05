import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LearnerListComponent } from './components/learner-list/learner-list.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { CreateGroupsComponent } from './components/create-groups/create-groups.component';
import { GroupListComponent } from './components/group-list/group-list.component';
import { AddLearnerComponent } from './components/add-learner/add-learner.component';

const routes: Routes = [
  {path: 'welcome', component: WelcomeComponent},
  {path: 'add-learner', component: AddLearnerComponent},
  {path: 'create-groups', component: CreateGroupsComponent},
  {path: 'group-list', component: GroupListComponent},
  {path: 'learner-list', component: LearnerListComponent},
  {path: '', redirectTo: 'welcome', pathMatch: 'full'},
  {path: '**', redirectTo: 'welcome'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
