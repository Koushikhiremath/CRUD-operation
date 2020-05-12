import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  

  constructor() { }

  getEmployee(){

    return fetch('http://dummy.restapiexample.com/api/v1/employees');

  
  }
}
