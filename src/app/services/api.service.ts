import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  readonly API_URL = "http://localhost:8080"

  constructor() { }
}
