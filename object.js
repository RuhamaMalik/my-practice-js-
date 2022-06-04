var student1 = {
    name: "Ruhama",
    class: "10A",
    subject: "Science",
    rolNum: 2001,
    attendence: "90%",
  }
  console.log(student1); 

  //use dot(.) to access specific property of an obj 
  console.log(student1.name); //Ruhama 

 console.log(student1.lastName) //undefine 

  student1.lastName = "Gull"; // adding new property to obj 
  console.log(student1.lastName); //Gull 

  //use (delete) keyword to dele e a specific property from object.
  delete student1.attendence;  
  console.log(student1.attendence) //undefine 

  //The in operator returns true if the specified property exists. 
  console.log("class" in student1); //true 
  
  // returns false if the specified property does'nt exists.
  console.log("attendence" in student1) //false 


























