import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-team',
  templateUrl: './my-team.component.html',
  styleUrls: ['./my-team.component.css']
})
export class MyTeamComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  empArray = [
    {name : 'Devansh Raval', location : 'aaaa', department : 'Ahmedabad' , email : 'a1@gmail.com' , mobile : '9879717455'},
    {name : 'Dhruvit Shah', location : 'bbbb', department : 'Ahmedabad' , email : 'b2@gmail.com' , mobile : '9879717455'},
    {name : 'Vanraj Ghed', location : 'cccc', department : 'Ahmedabad' , email : 'c3@gmail.com' , mobile : '9879717455'},
    {name : 'Vasantkumar  Prajapati', location : 'dddd', department : 'Ahmedabad' , email : 'd4@gmail.com' , mobile : '9879717455'},
    {name : 'Vinod Pawar', location : 'eeee', department : 'Ahmedabad' , email : 'e5@gmail.com' , mobile : '9879717455'},
    {name : 'Yogesh Gadhavi', location : 'ffff', department : 'Ahmedabad' , email : 'f6@gmail.com' , mobile : '9879717455'},
    {name : 'Shrinath Shetty', location : 'gggg', department : 'Ahmedabad' , email : 'g7@gmail.com' , mobile : '9879717455'},
    {name : 'Sonu Sharma', location : 'hhhh', department : 'Ahmedabad' , email : 'h8@gmail.com' , mobile : '9879717455'},
    {name : 'Sagar Sahani', location : 'iiii', department : 'Ahmedabad' , email : 'i9@gmail.com' , mobile : '9879717455'},
  ]

  monthNumber = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];

  firstLetter(name : any){
    let result = ' ';
    let v = true;
    for(let i = 0 ; i< name.length ; i++){
      if(name[i]==' '){
        v= true;
      }

      else if( name[i]!==' ' && v === true){
        result += name[i];
        v = false;
      }
      
    }
     return result;
  }

}
