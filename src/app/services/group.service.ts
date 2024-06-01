import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  readonly ENDPOINT_GROUPS = "/groups"
  readonly ENDPOINT_CREATE_GROUPS = "/create-groups"
  
  constructor(
    private httpClient: HttpClient,
    private apiService: ApiService
  ) { }

  getGroups(){
    return this.httpClient.get(this.apiService.API_URL + this.ENDPOINT_GROUPS)
  }

  createGroups(numnerOfGroups: number){
    this.httpClient.post(this.apiService.API_URL + this.ENDPOINT_CREATE_GROUPS, numnerOfGroups)
  }
}
