import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LearnerService } from '../../services/learner.service';
import { Learner } from '../../models/Learner';

@Component({
  selector: 'app-learner-list',
  templateUrl: './learner-list.component.html',
  styleUrl: './learner-list.component.css'
})
export class LearnerListComponent implements OnInit, OnDestroy{
  
  learners: Learner[]
  subscription: Subscription

  constructor(
    private learnerService: LearnerService
  ){
    this.subscription = new Subscription
  }

  deleteLearner(learner: Learner) : void {
    this.learnerService.deleteLearnerById(learner.id).subscribe((result) => this.ngOnInit())
  }

  ngOnInit() : void {
    this.subscription = this.learnerService.getLearners().subscribe(learners => this.learners = learners)
  }

  ngOnDestroy(): void {
      this.subscription.unsubscribe()
  }
}
