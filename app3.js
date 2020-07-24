
//======================CHAPTER 21 TO 38=========================


//Chapter 21 to 25:
//1. Write a program that takes two user inputs for first and
//last name using prompt and merge them in a new variable
//titled fullName. Greet the user using his full name.

var firstname=prompt("Enter your first name");
var lastname=prompt("Enter your last name");

var  fullName =firstname +" "+ lastname;
alert(fullName +  " welcome to this page ");

//2. Write a program to take a user input about his favorite
//mobile phone model. Find and display the length of user
//input in your browser.

var phone=prompt("Which is your favourite mobile phone ?");
var phonelength = phone.length;

document.write("<h2>My favourite phone is:</h2>" + phone);
document.write("<br><h2>Length of string is:</h2>" + phonelength);

//3. Write a program to find the index of letter “n” in the word
//“Pakistani” and display the result in your browser .

var s="Pakistani";
var n=s.indexOf("n");

document.write("<h2>String:</h2>"+s);
document.write("<h2>Index of n is:</h2>" +n);

//4. Write a program to find the last index of letter “l” in the
//word “Hello World” and display the result in your browser.

var str= "Hello World";
var n = str.lastIndexOf("l");

document.write("<h2>String:</h2>"+str);
document.write("<h2>Last index of letter l is:</h2>" +n);

//5. Write a program to find the character at 3rd index in the
//word “Pakistani” and display the result in your browser.

var word= "Pakistani";
var letterindex =word.charAt(3);

document.write("<h2>String:</h2>"+word);
document.write("<h2>Character of index 3 is:</h2>" +letterindex);


//6. Repeat Q1 using string concat() method. 
var firstname=prompt("Enter your first name ");
var lastname=prompt("Enter your last name");

var  fullName =firstname.concat(lastname);
alert(fullName +  " welcome to this page ");

//7. Write a program to replace the “Hyder” to “Islam” in the word “Hyderabad” and display the result in your browser. 

var city="Hyderabad";
var newcity=city.replace("Hyder", "Islam");

document.write("<h2>City:"+city+"</h2>");
document.write("<h2>After replacement:" +newcity+"</h2>");

//8. Write a program to replace all occurrences of “and” in the string with “&” and display the result in your browser. var message = “Ali and Sami are best friends. They play cricket and football together.”; 

var habit=" “Ali and Sami are best friends. They play cricket and football together.”";
var newhabit=habit.replace(/and/gi, "&");

document.write("<h2>Message:"+habit+"</h2>");
document.write("<h2>After replacement:" +newhabit+"</h2>");

//9. Write a program that converts a string “472” to a number 472. Display the values & types in your browser

var number="472";
var a = parseInt("472");

document.write("<h2>Value:</h2>"+number);
document.write("<br><h2>Type:" +typeof number+"</h2>");
document.write("<h2>Value:" +a+"</h2>");
document.write("<br><h2>Type:" +typeof a+"</h2>");


//10. Write a program that takes user input. Convert and show the input in capital letters


var str=prompt("Enter string to change in the capital letter!");
document.write("<br><h2>User Input:" +str+"</h2>");

var cap=str.toUpperCase();
document.write("<br><h2>Uppercase:" +cap+"</h2>");


//11. Write a program that takes user input. Convert and show the input in title case. 

var word=prompt("Enter string to change in the Title case!");
var a= word.charAt(0).toUpperCase();
var b=word.slice(1);
document.write("<br><h2>User Input:" +word+"</h2>");
document.write("<br><h2>User Input:" +a+b+"</h2>");



//12. Write a program that converts the variable num to string. var num = 35.36 ; Remove the dot to display “3536” display in your browser. 
 
var num = 35.36 ; 
document.write("<br><h2>Number:</h2>" +num);

var str=num.toString().replace(".","");
document.write("<br><h2>String:" +str+"</h2>");


//13. Write a program to take user input and store username in a variable. If the username contains any special symbol among [@ . , !], prompt the user to enter a valid username. For character codes of [@ . 
 

var username=prompt("Enter your username");

if (username.includes("@")||username.includes(".")||username.includes("!")||username.includes(",")){



    alert("Username is invalid!");
}
else{
    alert("Username you entered is valid!");
}
//14. You have an array A = [cake”, “apple pie”, “cookie”, “chips”, “patties”] Write a program to enable “search by user input” in an array. After searching, prompt the user whether the given item is found in the list or not. Note: Perform case insensitive search. Whether the user enters cookie, Cookie, COOKIE or coOkIE, program should inform about its availability. Example: 

var A=["cake","apple pie","cookie","chips","patties"];

var order=prompt("Welcome to ABC Bakery,What do you want to order sir/madam");
var order=order.toLowerCase();

if(A.includes(order)){
    alert(order+"  is available at index "+A.indexOf(order)+" in our bakery.");
}
else{
    alert("We are sorry."+order+"  is not  available in our bakery.");
}


//15. Write a program to take password as an input from user. The password must qualify these requirements: a. It should contain alphabets and numbers b. It should not start with a number c. It must at least 6 characters long If the password does not meet above requirements, prompt the user to enter a valid password. For character codes of a-z, A-Z & 0-9, refer to ASCII table at the end of this document. 
var password=prompt("Enter password");
var letters = /^[0-9a-zA-Z]+$/;

if(password.length!==6){
    alert("Password must contain atleast 6 characters\nPlease enter a valid Password!");
}
if (password.charCodeAt(0)<48&&password.charCodeAt(0)>57){
    alert("Password is invalid it cannot start with number!");
}

if(password.value.match(letters)){
    alert("Password you entered is valid!");
    }
else{
    alert("Password is invalid it must contain characters only!");
    }
    









//17. Write a program to display the last character of a user input. 

var userinput=prompt("Enter a string");
var a=userinput.charAt(userinput.lenght-1);
document.write("<h2>UserInput:"+userinput+"</h2>");
document.write("<h2>Last Character of input:"+a+"</h2>");
//16. Write a program to convert the following string to an array using string split method. var university = “University of Karachi”; 


var university="University of Karachi";

var arr=university.split("");
for (var i=0;i>arr.lenght;i++){
    document.write("<h3>"+arr.charAt(i)+"</h3>");

}

//18. You have a string “The quick brown fox jumps over the lazy dog”. Write a program to count number of occurrences of word “the” in given string.
function count(main_str, sub_str) 
    {
    main_str += '';
    sub_str += '';

    if (sub_str.length <= 0) 
    {
        return main_str.length + 1;
    }

       subStr = sub_str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
       return (main_str.match(new RegExp(subStr, 'gi')) || []).length;
    }
 
document.write("<h1>Number of occurance of 'the':</h1>"+(count("The quick brown fox jumps over the lazy dog", 'the')));

//Chapter 26-30
//1. Write a program that takes a positive integer from user & display the following in your browser. a. number b. round off value of the number c. floor value of the number d. ceil value of the number  
 
var num=prompt("Enter positive integer:");
var n=parseInt(num);
var a=Math.round(n);
var c=Math.floor(n);
var b=Math.ceil(n);

document.write("<h2>Number:"+num+"</h2>");
document.write("<h2 >Round off value:"+a+"</h2>");
document.write("<h2> floor value:"+c+"</h2>");
document.write("<h2>ceil value:"+b+"</h2>");

//2. Write a program that takes a negative floating point number from user & display the following in your browser. a. number b. round off value of the number c. floor value of the number d. ceil value of the number 

var num=prompt("Enter negative floating point number:");
var n=parseFloat(num);
var a=Math.round(n);
var c=Math.floor(n);
var b=Math.ceil(n);

document.write("<h2> Number:"+n+"</h2>");
document.write("<h2>Round off value:"+a+"</h2>");
document.write("<h2>floor value:"+c+"</h2>");
document.write("<h2>ceil value:"+b+"</h2>");

//3. Write a program that displays the absolute value of a number. E.g. absolute value of -4 is 4 & absolute value of 5 is 5 
 
var n=-3;
var new_n=Math.abs(n);
document.write("<h2> Absolute value of "+n+" is "+new_n+"</h2>");


//4. Write a program that simulates a dice using random() method of JS Math class. Display the value of dice in your browser.:

var number=Math.random();
var improvedNum = (number * 6) + 1;
var final = Math.floor(improvedNum);
document.write("<h2> random dice value:"+final+"</h2>");


//5. Write a program that simulates a coin toss using random() method of JS Math class. Display the value of coin in your browser 
 
var number=Math.random();
var improvedNum = (number * 2) + 1;
var final = Math.floor(improvedNum);
if(final===1){
    document.write("<h3>Random coin value=Head</h3>");
}
else{
    document.write("<h3>Random coin value=Tail</h3>");
}

//6. Write a program that shows a random number between 1 and 100 in your browser.

var num=Math.floor(Math.random()*100)+1;
document.write("<h3>Random value from 1 to 100 is:"+num+"</h3>");


//7. Write a program that asks the user about his weight. Parse the user input and display his weight in your browser. Possible user inputs can be: 

var weight=prompt("Enter your weight in kilogram");
var num = weight.match(/\d+/g)
var weight_float=parseFloat(num).toFixed(1);

document.write("<h3>The weight of the user is:"+weight_float+"</h3>");
//8. Write a program that stores a random secret number from 1 to 10 in a variable. Ask the user to input a number between 1 and 10. If the user input equals the secret number, congratulate the user. 

var num=Math.floor(Math.random()*10)+1;
var user_input=+prompt("Guess the number from 1 to 10:");

if(num===user_input){
    alert("Congratulation!You have guessed the right number!");

}
else{
    alert("Try again!");
}


//Chapters 31 to 34

//1. Write a program that displays current date and time in your browser.

var d = new Date();
document.write("<h3>"+d+"</h3>");

//2. Write a program that alerts the current month in words. For example December. 

var monthNames =["Janury", "Februry", "March", "April" ,"May", "June", "July", "August", "September" ,"October", "November" , "December"]
var d = new Date(); 
var currentMonth = d.getMonth();
var nameofmonth = monthNames[currentMonth];

document.write("<h1>Current Month</h1>");
document.write("<h3>"+nameofmonth+"</h3>");


//3. Write a program that alerts the first 3 letters of the current day, for example if today is Sunday then alert will show Sun

var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]; 
var now = new Date(); 
var theDay = now.getDay(); 
var nameOfToday = dayNames[theDay];

document.write("<h1>Today is: </h1>");
document.write("<h3>"+nameOfToday+"</h3>");

//4. Write a program that displays a message “It’s Fun day” if its Saturday or Sunday today. 

var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]; 
var now = new Date(); 
var theDay = now.getDay(); 
var nameOfToday = dayNames[theDay];

if(nameOfToday==="Sun" || nameOfToday==="Sat"){
    alert("It's Fun day");
}

//5. Write a program that shows the message “First fifteen days of the month” if the date is less than 16th of the month else shows “Last days of the month”. 
 
var now = new Date(); 
var theDay = now.getDate(); 

if (theDay <= 15) {
    alert("First fifteen days of the month");
} else {
    alert("Last fifteen days of the month");
}

//6. Write a program that determines the minutes since midnight, Jan. 1, 1970 and assigns it to a variable that hasn't been declared beforehand. Use any variable you like to represent the Date object. 

var d = new Date(); 
var millsSince = d.getTime();
var minutes=millsSince/60
 
document.write("<h1>"+d+"</h1>");
document.write("<h1>Elapsed milisecondes since midnight:</h1><h3>"+millsSince+"</h3>");
document.write("<h1>Elapsed minutes since midnight:</h1><h3>"+minutes+"</h3>");

//7. Write a program that tests whether it's before noon and alert “Its AM” else “its PM”. 

var d = new Date();
var hours = d.getHours();

if (hours ===0 || hours <= 12){
    alert("Its PM");
} else {
    alert("Its AM");
}

//8. Write a program that creates a Date object for the last day of the last month of 2020 and assigns it to variable named laterDate. 

var d= new Date();

var laterDate = new Date(d.getFullYear(),12,0)
document.write("<h1>LaterDate:</h1><h3>"+laterDate+"</h3>");


//9. Create a date object of the starting date of this Ramadan and alert the number of days past since 1st Ramadan? Note: 1st Ramadan was on June 18, 2015 

var today= new Date();
var ramzanday=new Date("June 18, 2015");
 var msToday = today.getTime(); 
var msramzanday = ramzanday.getTime();

var msDiff = msToday-msramzanday;

var dDiff = msDiff / (1000 * 60 * 60 * 24);
 dDiff = Math.floor(dDiff)
 document.write("<h3>"+dDiff+" days has passed since first ramzan,2015</h3>");

 //10. Write a program that displays in your browser the seconds that elapsed between the reference date and the beginning of 2015. 
 
 var today= new Date("Dec 05,2015");
 var day2=new Date("Jan 1, 2015");
 var msToday = today.getTime(); 
var msday2 =day2.getTime();

var msDiff = msToday-msday2;

var dDiff = msDiff / (1000 * 60 );
 dDiff = Math.floor(dDiff)
 document.write("<h3>On refrence date "+today+"</h3>");
 document.write("<h3>"+dDiff+" Seconds has passed since the beginning of 2015</h3>");

//11. Create a Date object for the current date and time. Extract the hours, reset the date object an hour ahead and finally display the date object in your browser.

var current= new Date();
var d = new Date();
d.setHours(d.getHours() - 1);

document.write("<h2>Current date: "+current+"</h2>");
document.write("<h2>1 hour ago it was: "+d+"</h2>");

//12. Write a program that creates a date object and show the date in an alert box that is reset to 100 years back? 

var date = new Date();
date.setFullYear( date.getFullYear() - 100 );
alert((date.getMonth() ) + '/' + (date.getDate()) + '/' + (date.getFullYear()));

document.write("<h2>Current date: "+current+"</h2>");
document.write("<h2>100 years back, it was: "+date+"</h2>");

//13. Write a program to ask the user about his age. Calculate and show his birth year in your browser. 

var date=new Date();
var age=+prompt("Enter your age ?");
var currentyear=date.getFullYear();
var birthyear=currentyear-age
document.write("<h3>Age:"+age+"</h3>");
document.write("<h3>Birth Year:"+birthyear+"</h3>");
 
//14. Write a program to generate your K-Electric bill in your browser

var name=prompt("Enter customer name:")
var mon="June"
var no_units=+prompt("No of units used:")
var charge_perunit=16;
var Amount_Payable  = no_units*charge_perunit;
var amount=Math.round(Amount_Payable,2)
var surcharges=350;
var gross=Amount_Payable+surcharges;
var gross_amount=Math.round(gross,2)
document.write("<h2>K-electric Bill</h2>");
document.write("<h3>Customer Name:"+name+"</h3>");
document.write("<h3>Month:"+mon+"</h3>");
document.write("<h3>No of Units:"+no_units+"</h3>");
document.write("<h3>Charges per unit:"+charge_perunit+"</h3>");
document.write("<h3>Net Amount Payable:"+gross_amount+"</h3>");
document.write("<h3>Late Payment Surcharges:"+surcharges+"</h3>");
document.write("<h3>Gross Amount Payable:"+gross+"</h3>");

//Chapter 36 to 38:

//1. Write a function that displays current date & time in your browser. 

function tellTime() {  
    var now = new Date();  
    alert("Date:" + now); 
}
 
tellTime();

//2. Write a function that takes first & last name and then it greets the user using his full name. 
 
function greet() {
    var firstname=prompt("Enter your first name?");
    var lastname=prompt("Enter your first name?");
    var fullname=firstname+lastname
    alert(fullname+"Welcome to this page");
}

greet();

//3. Write a function that adds two numbers (input by user) and returns the sum of two numbers. 

function add(){
    var num1=prompt("Enter a number");
    var num2=prompt("Enter a number");
    var sum =(num1+num2);
    alert("Sum of the numbers you enteredis:"+sum)
}

add();

//4. Calculator:  Write a function that takes three arguments num1, num2 & operator & compute the desired operation. Return and show the desired result in your browser. 

var num1=+prompt("Enter a number");
var num2=+prompt("Enter a number");
var operator=prompt("Enter any one operator");






function calculator(num1,num2,operator){
    if(operator=== "+"){
      var addd=(num1+num2);
      document.write("Sum of given num is"+addd);

    }
    else if(operator ==="-"){
    
      var sub=(num1-num2);
      document.write("Subration of given num is"+sub);
    }
    else if(operator === "*"){
      var mul=(num1*num2);  
      document.write("Multipilication of given num is"+mul);
    }
    else{
      var div=(num1/num2);  
      document.write("<h1>Division of given num is</h1>"+div);
    }
}

calculator(num1,num2,operator);


//5. Write a function that squares its argument. 

function square(number) {
    return number * number;
  }

var number=prompt("Enter any number you want to get square of:")
var n=square(number);
  
document.write("<h1>Square of num is:</h1>"+n);

//6. Write a function that computes factorial of a number. 
 
function factorial(n){
    let answer = 1;
    if (n == 0 || n == 1){
      return answer;
    }else{
      for(var i = n; i >= 1; i--){
        answer = answer * i;
      }
      return answer;
    }  
  }

var n=prompt("Enter any number you want to get factorial of:")
var f=factorial(n);
  
document.write("<h1>Factorial of num is:</h1>"+f);
//7. Write a function that take start and end number as inputs & display counting in your browser. 
 
var num1=+prompt("Enter first number");
var num2=+prompt("Enter last number"); 

function counting(num1,num2){
  document.write("<h2>Counting:</h2>");
  for(var i=num1;i<=num2;i++){
     document.write("<br>"+i);
  }
}  
counting(num1,num2);
//8. Write a nested function that computes hypotenuse of a right angle triangle.  Hypotenuse2 = Base2 + Perpendicular2 
//Take base and perpendicular as inputs. Outer function : calculateHypotenuse() Inner function: calculateSquare() 


var base=+prompt("Enter Base of the triangle");
var perpendicular=+prompt("Enter Perpendicular of the triangle"); 

function Hypotenuse(base,perpendicular){
  function Square(x){
    return x*x;}
  return Math.sqrt(Square(base)+Square(perpendicular));

   
}
function SecondFunction(){
  var result=Hypotenuse(1,3);
  document.write("<h2>Hypotenuse:"+result+"</h2>")
}
//9. Write a function that calculates the area of a rectangle.      A = width * height     Pass width and height in following manner: i. Arguments as value ii. Arguments as variables 

var width=+prompt("Enter width of rectangle");
var height=+prompt("Enter height of rectangle");

function Area(width,height){
    var area= width* height;
    return area;
}
document.write("<h2>area:</h2>"+Area(width,height));
document.write("<h2>area:</h2>"+Area(3,4));
//. 10 Write a JavaScript function that checks whether a passed string is palindrome or not?   A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam.

var string=prompt("Enter a string to check whether it is palindrome or not:");

function Palindrome(string){
  var backward=string.slice(string.lenght-1,);
  if(string===backward){
    document.write("<h2>The above string is palindrome!</h2>");
  }
  else{
    document.write("<h2>The above string is not apalindrome!</h2>");
  }
}
Palindrome(string);
//11. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.  EXAMPLE STRING : 'the quick brown fox'  EXPECTED OUTPUT : 'The Quick Brown Fox' 
function uppercase(str)
{
  var array1 = str.split(' ');
  var newarray1 = [];
    
  for(var x = 0; x < array1.length; x++){
      newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
  }
  return newarray1.join(' ');
}
console.log(uppercase("the quick brown fox"));
//12.  Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.  EXAMPLE STRING : 'Web Development Tutorial'  EXPECTED OUTPUT : 'Development' 

var string=prompt("Enter a string");
function find_longest_word(string)
{
  var array1 = str.match(/\w[a-z]{0,}/gi);
  var result = array1[0];

  for(var x = 1 ; x < array1.length ; x++)
  {
    if(result.length < array1[x].length)
    {
    result = array1[x];
    } 
  }
  return result;
}


document.write("<h2>the longest word is</h2>"+find_longest_word(string));


//13.Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of
 
//occurrences of the specified letter within the string.

function char_count(str, letter) 
{
 var letter_Count = 0;
 for (var position = 0; position < str.length; position++) 
 {
    if (str.charAt(position) == letter) 
      {
      letter_Count += 1;
      }
  }
  return letter_Count;
}
document.write("</br>the occurence of 'o' in the string is:"+char_count('w3resource.com', 'o'));



//14. The Geometrizer Create 2 functions that calculate properties of a circle, using the definitions here. Create a function called calcCircumference: • Pass the radius to the function. • Calculate the circumference based on the radius, and output "The circumference is NN". Create a function called calcArea: • Pass the radius to the function. • Calculate the area based on the radius, and output "The area is NN". 
 
//Circumference of circle    =     2πr Area of circle       =     πr2 


function Circumference(radius){
  var circumference=2*3.14*radius**2;
  return circumference;
 
}
function Area(radius){
  var area=3.14*radius**2;
  return area;

}
alert("The circumference of circle is:"+Circumference(4));

alert("The area of circle is:"+Area(3));







//9. Write a function that calculates the area of a rectangle.      A = width * height     Pass width and height in following manner: i. Arguments as value ii. Arguments as variables 

var width=+prompt("Enter width of rectangle");
var height=+prompt("Enter height of rectangle");

function Area(width,height){
    var area= width* height;
    return area;
}
document.write("<h2>area:</h2>"+Area(width,height));
document.write("<h2>area:</h2>"+Area(3,4));


//11. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.  EXAMPLE STRING : 'the quick brown fox'  EXPECTED OUTPUT : 'The Quick Brown Fox' 

var string=prompt("Enter a string");

function Capitalize(string){
  var breaks=string.toLowerCase().split(" ");
  for(var i=0;i<breaks.lenght;i++){
    string[i] = string[i][0].toUpperCase() + string[i].slice(1);
  }
  
  document.write(string.join(" "));
  return string;
  

}
Capitalize(string);




//13.Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of
 
//occurrences of the specified letter within the string.

function char_count(str, letter) 
{
 var letter_Count = 0;
 for (var position = 0; position < str.length; position++) 
 {
    if (str.charAt(position) == letter) 
      {
      letter_Count += 1;
      }
  }
  return letter_Count;
}

var a=char_count('w3resource.com', 'o');
document.write("ally"+a);






