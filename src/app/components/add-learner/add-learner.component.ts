import { Component } from '@angular/core';
import { LearnerService } from '../../services/learner.service';
import { Subscription } from 'rxjs';
import { Learner } from '../../models/Learner';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-learner',
  templateUrl: './add-learner.component.html',
  styleUrl: './add-learner.component.css'
})
export class AddLearnerComponent {
  
  learner: Learner 
  learnerForm: NgForm
  subscription: Subscription

  constructor(
    private learnerService: LearnerService,
    private router: Router,
  ){
    this.learner = new Learner()
  }

  addLearner(learner: Learner): void {
      this.learnerService.addLearner(learner).subscribe(result => this.goToLearnerList())
  }

  goToLearnerList(){
    this.router.navigateByUrl('/learner-list')
  }


  onSubmit(){
    this.addLearner(this.learner)
  }
}
