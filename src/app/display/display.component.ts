import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';
import { convertActionBinding } from '@angular/compiler/src/compiler_util/expression_converter';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  public disp:boolean=false;

  public create:boolean=false;

  public edit:boolean=false;



  public employees=[{

  }];

  public employee={
    employeeid:"",
    employeename:"",
    employeesalary:"",
    employeeage:""

  }

  

  constructor(private res:DataService) { }

  ngOnInit(): void {
    
  }

  getAllEmployees()
  {
    this.create=false;
    this.edit=false;
    this.disp=true;

    this.res.getEmployee().then((response)=>
    {
      response.json().then((data)=>
      {
        this.employees=data.data;
       
      })
    })
    
  }
    
  createemployee()
  {
    this.disp=false;
    this.edit=false;
    this.create=true;
    
  }

  sumbitemployee(...value)
  {
   this.employee.employeeid=value[0];
   this.employee.employeename=value[1];
   this.employee.employeesalary=value[2];
   this.employee.employeeage=value[3];

   console.log(this.employee);

   this.res.createemployee(this.employee);
   this.create=false;
  }


 

}
