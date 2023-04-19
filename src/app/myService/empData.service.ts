export class EmpDataService{
    EMP_DATA_ARRAY = [
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

