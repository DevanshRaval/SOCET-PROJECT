export class EmpDataService{
    EMP_DATA_ARRAY = [
    {name : 'Devansh Raval', location : 'Ahmedabad', department : 'Ahmedabad' , email : 'Devansh@gmail.com' , mobile : '9879717455'},
    {name : 'Dhruvit Shah', location : 'Ahmedabad', department : 'Ahmedabad' , email : 'Dhruvit@gmail.com' , mobile : '9879717455'},
    {name : 'Vanraj Ghed', location : 'Ahmedabad', department : 'Ahmedabad' , email : 'Vanraj@gmail.com' , mobile : '9879717455'},
    {name : 'Vasantkumar  Prajapati', location : 'Pune', department : 'Ahmedabad' , email : 'Vasantkumar@gmail.com' , mobile : '9879717455'},
    {name : 'Vinod Pawar', location : 'Pune', department : 'Ahmedabad' , email : 'Vinod@gmail.com' , mobile : '9879717455'},
    {name : 'Yogesh Gadhavi', location : 'Ahmedabad', department : 'Ahmedabad' , email : 'Yogesh@gmail.com' , mobile : '9879717455'},
    {name : 'Shrinath Shetty', location : 'Ahmedabad', department : 'Ahmedabad' , email : 'Shrinath@gmail.com' , mobile : '9879717455'},
    {name : 'Sonu Sharma', location : 'Pune', department : 'Ahmedabad' , email : 'Sonu@gmail.com' , mobile : '9879717455'},
    {name : 'Sagar Sahani', location : 'Ahmedabad', department : 'Ahmedabad' , email : 'Sagar@gmail.com' , mobile : '9879717455'},
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

