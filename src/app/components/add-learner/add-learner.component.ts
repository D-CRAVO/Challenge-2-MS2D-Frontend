import { Component, OnInit } from '@angular/core';
import { LearnerService } from '../../services/learner.service';
import { Subscription } from 'rxjs';
import { Learner } from '../../models/Learner';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-learner',
  templateUrl: './add-learner.component.html',
  styleUrl: './add-learner.component.css'
})
export class AddLearnerComponent implements OnInit{
  
  learner: Learner 
  learnerForm: NgForm
  subscription: Subscription

  constructor(
    private learnerService: LearnerService,
    private router: Router,
    private route: ActivatedRoute
  ){
    this.learner = new Learner()
  }

  ngOnInit(): void {
      
  }

  addLearner(learner: Learner): void {
      this.learnerService.addLearner(learner).subscribe(result => this.goToLearnerList())
  }

  goToLearnerList(){
    this.router.navigateByUrl('/learner-list')
  }


  onSubmit(){
    console.log('submit form')
    this.addLearner(this.learner)
  }

}
