import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

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

  public profileForm = new FormGroup({
    employeeid: new FormControl(''),
    employeename: new FormControl(''),
    employeesalary:new FormControl(''),
    employeeage:new FormControl('')
  });

  

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

  editemployee(employee){
    this.create=false;
    this.disp=false;
    this.edit=true;
    console.log(employee);
    this.profileForm.patchValue({

      employeeid:employee.id,
      employeename:employee.employee_name,
      employeesalary:employee.employee_salary,
      employeeage:employee.employee_age
      
    })
  }

  deleteemployee(employee)
  {
    this.create=false;
    this.edit=false;
    this.disp=true;
    this.res.delete(employee,employee.employeeid);
    
    
  }

  updateemployee(data){
    this.res.update(data,data.employeeid)
    {
      console.log(data);
    }
    this.edit=false;
    this.create=false;
    this.disp=true;
  }


 

}
