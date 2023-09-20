

do
{
 var bmi = parseInt(prompt("Enter your BMI "));
 alert(`You have entered ${bmi}`);
 if(bmi<18.5) alert("Your are Underweight per bmi score");
  
 else if(18.5<=bmi && bmi<=25.5) alert("you have healthy bmi score");
  
 else if(25.5<bmi) alert("You are obsese per bmi score");
  
 else alert("enter a valid bmi score");
  
}while(false);
alert("bye");