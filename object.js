//JS Object
var student1 = {
  name: "Ruhama",
  class: "10A",
  subject: "Science",
  rolNum: 2001,
  attendence: "90%",
}
console.log(student1); 
console.log(student1.name); //Ruhama //use dot(.) to access specific property of an obj 10 //console.log(student1.lastName) //undefine 
student1.lastName = "Gull"; // adding new property to obj 
console.log(student1.lastName); //Gull 
delete student1.attendence; //use (delete) keyword to dele e a specific property from object. 
console.log(student1.attendence) //undefine 
console.log("class" in student1); //true //The in operator returns true if the specified property exists. 
console.log("attendence" in student1) //false // returns false if the specified property does'nt exists.
