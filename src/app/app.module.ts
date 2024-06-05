import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

/**
 * Custom Conponents 
 */
import { MenuComponent } from './components/menu/menu.component';
import { LearnerListComponent } from './components/learner-list/learner-list.component';
import { WelcomeComponent } from './components/welcome/welcome.component'; 
import { CreateGroupsComponent } from './components/create-groups/create-groups.component';
import { AddLearnerComponent } from './components/add-learner/add-learner.component';
import { GroupListComponent } from './components/group-list/group-list.component';

/**
 * Angular Material Modules
 */
import { MatMenuModule } from '@angular/material/menu'; 
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LearnerListComponent,
    WelcomeComponent,
    CreateGroupsComponent,
    AddLearnerComponent,
    GroupListComponent
  ],
  imports: [
    BrowserModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
    AppRoutingModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
