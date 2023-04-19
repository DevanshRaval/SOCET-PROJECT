import { Component, OnInit } from '@angular/core';
import { EmpDataService } from 'src/app/myService/empData.service';

@Component({
  selector: 'app-my-team',
  templateUrl: './my-team.component.html',
  styleUrls: ['./my-team.component.css'],
})
export class MyTeamComponent implements OnInit {

  empArray: any = [];
  
  
  constructor(private empData : EmpDataService) {
    this.empArray  = empData.EMP_DATA_ARRAY;
   }

  ngOnInit(): void {}
  
   getFirstLetter(name : any){
      return this.empData.firstLetter(name)
   }
  

}
