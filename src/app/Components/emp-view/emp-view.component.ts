import { Component, OnInit } from '@angular/core';
import { EmpDataService } from 'src/app/myService/empData.service';

@Component({
  selector: 'app-emp-view',
  templateUrl: './emp-view.component.html',
  styleUrls: ['./emp-view.component.css']
})
export class EmpViewComponent implements OnInit {

  empArray : any = [];

  
  constructor(private empData : EmpDataService) { 
    this.empArray  = empData.EMP_DATA_ARRAY;
  }

  ngOnInit(): void {
  }

  getFirstLetter(name : any){
    return this.empData.firstLetter(name);
  }

}
