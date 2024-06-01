import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { catchError, of, tap } from 'rxjs';
import { Learner } from '../models/Learner';

@Injectable({
  providedIn: 'root'
})
export class LearnerService {

  readonly ENDPOINT_LEARNERS = "/learners"
  readonly ENDPOINT_LEARNER = "/learner"

  constructor(
    private httpClient: HttpClient,
    private apiService: ApiService
  ) { }

  getLearners(){
    return this.httpClient.get(this.apiService.API_URL + this.ENDPOINT_LEARNERS)
  }

  deleteLearnerById(id: number){
    this.httpClient.delete(this.apiService.API_URL + this.ENDPOINT_LEARNER + `/${id}`).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, undefined))
    )
  }

  addLearner(learner: Learner){
    this.httpClient.post(this.apiService.API_URL + this.ENDPOINT_LEARNERS, learner).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, undefined))
    )
  }

  private log(response: any){
    console.table(response);
  }

  private handleError(error: Error, errorValue: any){
    console.error(error);
    
    return of(errorValue);
  }
}
