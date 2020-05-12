import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';
import { convertActionBinding } from '@angular/compiler/src/compiler_util/expression_converter';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  public employees=[{

  }];

  constructor(private res:DataService) { }

  ngOnInit(): void {

     
    
    
  }

  getAllEmployees()
  {

    this.res.getEmployee().then((response)=>
    {
      response.json().then((data)=>
      {
        this.employees=data.data;
       
      })
    })
    
    
    
    
  }
    

  

}
