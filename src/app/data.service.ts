import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  

  constructor() { }

  getEmployee(){

    return fetch('http://dummy.restapiexample.com/api/v1/employees');
  }

  createemployee(data)
  {
    fetch('http://dummy.restapiexample.com/api/v1/create', {
  method: 'POST', // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
})
.then(response => response.json())
.then(data => {
  console.log('Success:', data);
})
.catch((error) => {
  console.error('Error:', error);
});
  }

}
