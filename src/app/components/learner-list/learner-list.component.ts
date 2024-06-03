import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LearnerService } from '../../services/learner.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-learner-list',
  templateUrl: './learner-list.component.html',
  styleUrl: './learner-list.component.css'
})
export class LearnerListComponent implements OnInit, OnDestroy{
  
  learners: any
  subscription: Subscription

  constructor(
    private learnerService: LearnerService,
    private router: Router
  ){
    this.subscription = new Subscription
  }

  ngOnInit() : void {
    this.subscription = this.learnerService.getLearners().subscribe(learners => this.learners = learners)
  }

  ngOnDestroy(): void {
      this.subscription.unsubscribe()
  }
}
