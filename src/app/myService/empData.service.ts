export class EmpDataService{
    EMP_DATA_ARRAY = [
    {name : 'Devansh Raval', location : 'Ahmedabad', department : 'Angular' , email : 'Devansh@gmail.com' , mobile : '9879717455'},
    {name : 'Dhruvit Shah', location : 'Ahmedabad', department : 'Angular' , email : 'Dhruvit@gmail.com' , mobile : '9879717455'},
    {name : 'Vanraj Ghed', location : 'Ahmedabad', department : 'Angular' , email : 'Vanraj@gmail.com' , mobile : '9879717455'},
    {name : 'Vasantkumar  Prajapati', location : 'Pune', department : 'Angular' , email : 'Vasantkumar@gmail.com' , mobile : '9879717455'},
    {name : 'Vinod Pawar', location : 'Pune', department : 'Angular' , email : 'Vinod@gmail.com' , mobile : '9879717455'},
    {name : 'Yogesh Gadhavi', location : 'Ahmedabad', department : 'Angular' , email : 'Yogesh@gmail.com' , mobile : '9879717455'},
    {name : 'Shrinath Shetty', location : 'Ahmedabad', department : 'Angular' , email : 'Shrinath@gmail.com' , mobile : '9879717455'},
    {name : 'Sonu Sharma', location : 'Pune', department : 'Angular' , email : 'Sonu@gmail.com' , mobile : '9879717455'},
    {name : 'Sagar Sahani', location : 'Ahmedabad', department : 'Angular' , email : 'Sagar@gmail.com' , mobile : '9879717455'},
  ]


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

