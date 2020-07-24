
//========================CHAPTER 1 TO 20============================


//Chapter 1

// Write a script to greet your website visitor using JS alert box. 
alert("Welcome to our page");

//2. Write a script to display following message on your web page: 
alert("Error! please enter a valid password");

//3. Write a script to display following message on your web page: (Hint : Use line break):
alert("Welcome to JS Land..\r\n Happy Coding!");


//4. Write a script to display following messages in sequence: 
alert("Welcome to JS Land");


alert("Happy coding\n  Prevent this message from creating additional dialogs");



//5. Generate the following message through browser’s developer console:
console.log("Hello i can run JS through my web browser's console");

//6. Make use of alerts in your new/existing HTML & CSS project. 


//7. Practice placement of <script></script> element in following sections of your project in exercise 6: a. Head b. Body (before your page’s HTML) 
//c. Body (inside your page’s HTML) d. Body (after your page’s HTML) 

//Chapter 2
//1. Declare a variable called username. 

var username;

//2. Declare a variable called myName & assign to it a string that represents your Full Name.

var myName="Bushra Afsar Ali";

//3.3. Write script to a) Declare a JS variable, titled message. b) Assign “Hello World” to variable message c) Display the message in alert box.

var message="Hello World";
alert(message);

//4. Write a script to save student’s bio data in JS variables and show the data in alert boxes.

var name = prompt("What is your name?");
alert("   "+name+"  ");
var age =prompt("What is your age?");
alert("   "+age+"  ");
var course =prompt("Which course have you chosen?");
alert("    "+course+"   ");

//5. Write a script to display the following alert using one JS variable: 
var a="PIZZA";

alert(a.slice(0,5)+"\n"+a.slice(0,4)+"\n"+a.slice(0,3)+"\n"+a.slice(0,2)+"\n"+a.slice(0,1)+"\n");

//6. Declare a variable called email and assign to it a string that represents your Email Address(e.g. example@example.com). Show the blow mentioned message in an alert box.(Hint: use string concatenation) 

var email="bushrasheikh@gmail.com";
alert("My email address is "+email);

//7.Declare a variable called book & give it the value “A smarter way to learn JavaScript”. Display the following message in an alert box: 

var book="A smarter way to learn JavaScript";
alert("I am trying to learn from the Book "+book);

//8. Write a script to display this in browser through JS 

document.write("Yah! I can write HTML content through Javascript. ");


// 9. Store following string in a variable and show in alert and browser through JS “▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”  

var design="▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
alert("   "+design+"   ");


// the end

//Chapter 3

//1. Declare a variable called age & assign to it your age. Show your age in an alert box. 

var age=13;
alert("I am " + age +" years old");


//2. Declare & initialize a variable to keep track of how many times a visitor has visited a web page. Show his/her number of visits on your web page. For example: “You have visited this site N times”. 

var visits=14;
alert("You have this site "+ visits +" times.");


//3. Declare a variable called birthYear & assign to it your birth year. Show the following message in your browser: 

var birthYear=1998;
document.writeln("<br>My birth year is " + birthYear+".");
document.writeln("<br>Data type of my declared variable is number.");


//4. A visitor visits an online clothing store www.xyzClothing.com . Write a script to store in variables the following information: a. Visitor’s name b. Product title c. Quantity i.e. how many products a visitor wants to order Show the following message in your browser: “John Doe ordered 5 T-shirt(s) on XYZ Clothing store”. 

var visitors_name="Amna";
var quantity=2;
var product_title="T shirts";

document.write("<br>"+visitors_name+"  have ordered "+quantity+" "+product_title+"  on xyz Clothing store");



// The End

//Chapter 4

//1. Declare 3 variables in one statement. 

var c=23 , d=34 , e= 56;

//2. Declare 5 legal & 5 illegal variable names. 


// var my age, h@ , 1a , *book , 12;
var myname , myage , mylast_name , num1, sign$;

//3. Display this in your browser a)  A heading stating “Rules for naming JS variables” b)  Variable names can only contain ______, ______, ______ and ______. For example $my_1stVariable c) Variables must begin with a ______, ______ or _____. For example $name, _name or name d) Variable names are case _________ e) Variable names should not be JS _________ 

document.write("<h1>Rules for naming JS variable</h1>");
document.write("<p>Variable can only contains numbers,$ and _.For example $my_1stVariable<br>Variable names are case senstive.<br>Variable names should not be JS keyword</p>")

//Chapter 5
//1. Write a program that take two numbers & add them in a new variable. Show the result in your browser.   

var num1= 4;
var num2= 5;

var num=num1+num2;
document.write("Sum of "+" "+ num1 +"  and  " + num2 +"  is " + num);

//2. Repeat task1 for subtraction, multiplication, division & modulus. 

var num4=num1/num2;
var num5=num1*num2;
var num6=num1-num2;
var num7=num1%num2;
document.write("<br>Division of "+ num1 +"  and " + num2 +"  is " + num4);
document.write("<br>Subtraction of "+ num1 +" and " + num2 +"  is  " + num6);
document.write("<br>Multiplication of "+ num1 +" and " + num2 +"  is  " + num5);
document.write("<br>Modulus of  "+ num1 +" and " + num2 +" is " + num7);

//3. Do the following using JS Mathematic Expressions a. Declare a variable. b. Show the value of variable in your browser like “Value after variable declaration is: ??”. c. Initialize the variable with some number. d. Show the value of variable in your browser like “Initial value: 5”. e. Increment the variable. f. Show the value of variable in your browser like “Value after increment is: 6”. g. Add 7 to the variable. h. Show the value of variable in your browser like “Value 

//after addition is: 13”. i. Decrement the variable. j. Show the value of variable in your browser like “Value after decrement is: 12”. k. Show the remainder after dividing the variable’s value by 3.  l. Output : “The remainder is : 0”.  
  
var number;
document.write("<br>Value after variable declaration is "+ number);
number=7;
document.write("<br>Initial Value is "+ number);
var number1=++number;
document.write("<br> Value after increment is "+ number1);
var number1=number1+7;
document.write("<br> Value after addition is "+ number1);
var number2=number1--;
document.write("<br> Value after decrement is "+ number2);
var rem = number2%3;
document.write("<br> The remainder "+ rem);

//4. Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & calculate the cost of buying 5 tickets to a movie

var unit_cost = 600;
var total_cost= unit_cost * 5;
document.write("<br> Total cost to buy 5 ticketd to a movie is "+ total_cost);

//5.  Write a script to display multiplication table of any number in your browser

var n=3;
for( var i=1;i<=10;i++){
    document.write("<br>"+n+" * "+i+" = "+n*i);
}



//6. The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here. a.  Store a Celsius temperature into a variable. b. Convert it to Fahrenheit & output “NNoC is NNoF”. c. Now store a Fahrenheit temperature into a variable. d. Convert it to Celsius & output “NNoF is NNoC”. 

var cltemp=40;
var fartemp=(cltemp*9/5)+32;
var tempfar=80;
var tempcl=(tempfar-32)*5/9;

document.write("<br>" + cltemp+ "  is "+ fartemp);
document.write("<br>" + tempfar+ "  is "+ tempcl);

//7.  Write a program to implement checkout process of a shopping cart system for an e-commerce website. Store the following in variables 
// a Price of item 1 b. Price of item 2 c. Ordered quantity of item 1 d. Ordered Quantity of item 2 e. Shipping charges 
//compute the total cost & show the receipt in your browser

var price1=650;
var qty1=3;
var price2=100;
var qty2=7;
var t1=price1*qty1;
var t2=price2*qty2;
var total=t1+t2;

document.write("<h1>Shipping Cart</h1>");
document.write("<br> Price of item 1 is "+price1);
document.write("<br> Quantity of item 1 is "+ qty1);
document.write("<br> Price of item 2 is "+price2);
document.write("<br> Quantity item 2 is "+qty2);

document.write("<br> Total cost of your order is "+total);


//8. Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the result in your browser 

var total_marks=980;
var obtained_marks=804;
var percentage=(obtained_marks/total_marks)*100;
document.write("<h1>Mark Sheet</h1>");
document.write("<br> Total Marks is: "+total_marks);
document.write("<br> Obtained Marks is: "+obtained_marks);
document.write("<br> Percentage is: "+percentage+"%");


//9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani Rupees. Perform all calculations in a single expression. (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee and 1 Saudi Riyal = 28 Pakistani Rupee) 

var us_rate=104.80;
var saudi_rate=28
var pak1=us_rate*10;
var pak2=saudi_rate*28;
var pkr=pak1+pak2;
document.write("<h1>Currency in PKR</h1>");
document.write("<br> Total currency in PKR "+pkr);

//10. Write a program to initialize a variable with some number and do arithmetic in following sequence: a. Add 5 b. Multiply by 10 c. Divide the result by 2 Perform all calculations in a single expression 

var numm = 10;
var sol = 10+5*10/12;
document.write("<br> the result is "+sol);

//11. The Age Calculator: Forgot how old someone is? Calculate it! a. Store the current year in a variable. b. Store their birth year in a variable. c. Calculate their 2 possible ages based on the stored values. 
//Output them to the screen like so: “They are either NN or NN years old”.  

var current_year=2020;
var birth_year=1997;
var age=current_year-birth_year;

document.write("<h1>Age Calculator</h1>");
document.write("<br> Current year: "+current_year);
document.write("<br> Birth year: "+birth_year);
document.write("<br> Your Age is: "+age);


//12. The Geometrizer: Calculate properties of a circle. a. Store a radius into a variable. 
//b. Calculate the circumference based on the radius, and output “The circumference is NN”.

var radius=4;
var pi=3.142;
var area=pi*radius**2;
var circumference=2*pi*radius;


document.write("<h1>The Geometrizer</h1>");
document.write("<br> Radius of circle: "+radius);
document.write("<br> the circumeference is : "+circumference);
document.write("<br> the area is : "+area);



//13. The Lifetime Supply Calculator: Ever wonder how much a “lifetime supply” of your favorite snack is? Wonder no more. a. Store your favorite snack into a variable b. Store your current age into a variable. c. Store a maximum age into a variable. d. Store an estimated amount per day (as a number). e. Calculate how many would you eat total for the rest of your life. 

var fvt_snack="lays"
var currentage=22;
var maxage=70;
var per_day=2;
var qty=(maxage-currentage)*2;

document.write("<h1>The Lifetime Supply Calculator</h1>");
document.write("<br>Favourite Snacks: "+fvt_snack);
document.write("<br> the Current age is: "+currentage);
document.write("<br> Estimated Maximum Age is  : "+maxage);
document.write("<br>Amount Of Snacks per day: "+qty);
document.write("<br> You will need "+qty+ "  of "+fvt_snack+" to last you until the ripe old age of "+maxage);


//Chapter 6:
//1. Write a program to take a number in a variable, do the required arithmetic to display the following result in your browser:   

var a=10;
document.write("<h1>Result</h1>" );
document.write("<br> The value of a is : " +a);
document.write("<br>...........................") ;

var b= ++a;
document.write("<br><br> The value of ++a is: "+b);
document.write("<br>Now the value of a is: "+a);


var c= ++a;
document.write("<br><br>Now the value of ++a is: "+b);
document.write("<br>Now the value of a is: "+c);

var c= --a;
document.write("<br><br>Now the value of --a is: "+b);
document.write("<br>Now the value of a is: "+c);

var d= b--;
document.write("<br><br>Now the value of a-- is: "+d);
document.write("<br>Now the value of a is: "+b);

//2. What will be the output in variables a, b & result after execution of the following script:
 //var a = 2, b = 1; var result = --a - --b + ++b + b--;
//Explain the output at each stage: --a; --a - --b; --a - --b + ++b; --a - --b + ++b + b--; 

var a = 2;
var b = 1;
var result = --a - --b + ++b + b--;
--a;
document.write("<br> the value of a is: "+a);
document.write("<br> the value of b is: "+b);
document.write("<br> value of result is: "+result);
document.write("<br>...........................") ;
--a - --b;
document.write("<br> the value of a is: "+a);
document.write("<br> the value of b is: "+b);
document.write("<br> value of result is: "+result);
document.write("<br>...........................") ;
--a - --b + ++b;
document.write("<br> the value of a is: "+a);
document.write("<br> the value of b is: "+b);
document.write("<br> value of result is: "+result);
document.write("<br>...........................") ;
--a - --b + ++b + b--;
document.write("<br> the value of a is: "+a);
document.write("<br> the value of b is: "+b);
document.write("<br> value of result is: "+result);
document.write("<br>...........................") ;


 




//3. Write a program that takes input a name from user & greet the user. 

var name = prompt("What is your name?");
alert(name + "  Welcome to ur page");

//5. Write a program to take input a number from user & display it’s multiplication table on your browser. If user does not enter a new number, multiplication table of 5 should be displayed by default.  

var num = prompt("Give number which table you want to display");
var n=Number(num);
if(num ===""){
        
    for( var i=1;i<=10;i++){
    document.write("<br>"+5+" * "+i+" = "+5*i);
   
    }
}
else {
    for( var s=1;s<=10;s++){
        document.write("<br>"+ n+" * "+s+" = "+ n*s);
    
    }    
}


//6. Take a) Take three subjects name from user and store them in 3 different variables. 

var Subject1 = prompt("Give name of a subject");
var Subject2 = prompt("Give name of a subject");
var Subject3 = prompt("Give name of a subject");


//b) Total marks for each subject is 100, store it in another variable. 

var Totalmarks=100;

//c) Take obtained marks for first subject from user and stored it in different variable. 

var Obt1 = +prompt("Give obtained marks of a subject1");

//d) Take obtained marks for remaining 2 subjects from user and store them in variables.

var Obt2 = +prompt("Give obtained marks of a subject2");
var Obt3 = +prompt("Give obtained marks of a subject3");

 //e) Now calculate total marks and percentage and show the result in browser like this.(Hint: user table)  

var totalobt =Obt1+Obt2+Obt3;
var per=totalobt/300*100;
var sub1_per=Obt1/Totalmarks*100;
var sub2_per=Obt2/Totalmarks*100;
var sub3_per=Obt3/Totalmarks*100;

document.write("<br><table><tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr><tr><td>"+Subject1+"</td><td>"+Totalmarks+"</td><td>"+Obt1+"</td><td>"+sub1_per+"%</td></tr><tr><td>"+Subject2+"</td><td>"+Totalmarks+"</td><td>"+Obt2+"</td><td>"+sub2_per+"%</td></tr><tr><td>"+Subject3+"</td><td>"+Totalmarks+"</td><td>"+Obt3+"</td><td>"+sub3_per+"%</td></tr><tr><td></td><td>"+300+"</td><td>"+totalobt+"</td><td>"+per+"%</td></tr>")

//Chap 6-11
 //1. Write a program to take “city” name as input from user. If user enters “Karachi”, welcome the user like this: “Welcome to city of lights” 

 var city_name=prompt("Enter city name: ");
 if(city_name==="Karachi"){
     alert("Welcome to the city of light");}
 else{
     alert("Welcome!");
 }   
 
 
 //2. Write a program to take “gender” as input from user. If the user is male, give the message: Good Morning Sir. If the user is female, give the message: Good Morning Ma’am.  
 
 var gender=prompt("Enter your Gender here:");
 
 if(gender==="male"){
     alert("Good Morning Sir!");}
 else{
     alert("Good Morning Ma'am!");
 }    
 
 //3. Write a program to take input color of road traffic signal from the user & show the message according to this table: 
 
 var signal_color=prompt("Enter signal color");
 
 if (signal_color==="red"){
     alert("Must Stop!");}
 else  if(signal_color==="green"){
         
     alert("Move Now!");}
 else if (signal_color==="yellow"){
     alert("Ready to Move!");    
     
 }
 
 // 4. Write a program to take input remaining fuel in car (in litres) from user. If the current fuel is less than 0.25litres, show the message “Please refill the fuel in your car” 
 
 
 var remaining_fuel =+prompt("Enter Remaining fuel of Vehicle in litres: ");
 
 if(remaining_fuel<0.25){
     alert("Please refill the fuel in your car");
 }
 
 
 //5. Run this script, & check whether alert message would be displayed or not. Record the outputs. 
 //a. var a = 4; if (++a === 5){ alert("given condition for variable a is true"); }   
 
 var a=4;
 var b=++a;
 if(b === 5){
     alert("given condition for variable a is true");
 }
 
 //b. var b = 82; if (b++ === 83){ alert("given condition for variable b is true"); }  
  var b = 82; 
 if (b++ === 83){ 
     alert("given condition for variable b is true"); } 
  
 //c. var c = 12; if (c++ === 13){ alert("condition 1 is true"); } if (c === 13){ alert("condition 2 is true"); } if (++c < 14){ alert("condition 3 is true"); } if(c === 14){ alert("condition 4 is true"); }  
 var c = 12; 
 if (c++ === 13){
      alert("condition 1 is true"); }
 if (c === 13){ alert("condition 2 is true"); } 
 if (++c < 14){ alert("condition 3 is true"); } 
 if(c === 14){ alert("condition 4 is true"); } 
 //d. var materialCost = 20000; var laborCost = 2000; var totalCost = materialCost + laborCost; if (totalCost === laborCost + materialCost){ alert("The cost equals"); }  
 var materialCost = 20000;
  
 var laborCost = 2000; 
 var totalCost = materialCost + laborCost;
 if (totalCost === laborCost + materialCost){
      alert("The cost equals"); } 
  
 //e. if (true){ alert("True"); } if (false){ alert("False"); }
 if (true){
      alert("True"); } 
 if (false){ 
     alert("False"); }   
 //f. if("car" < "cat"){ alert("car is smaller than cat"); }  
 if("car" < "cat"){ 
     alert("car is smaller than cat"); } 
  
 
 //6. Write a program to take input the marks obtained in three subjects & total marks. Compute & show the resulting percentage on your page. Take percentage & compute grade as per following table: 
 
 var Obt1 = +prompt("Enter obtained marks of a subject1:");
 var Obt2 = +prompt("Enter obtained marks of a subject2");
 var Obt3 = +prompt("Enter obtained marks of a subject3");
 var Total_marks=+prompt("Enter total marks:");
 var obtained_marks=Obt1+Obt2+Obt3;
 var per=(obtained_marks/Total_marks*100).toFixed();
 
 if(per>=80){
     var Grade="A-one";
     var remarks="Excellent";
 }
 else if(per>=70){
     var Grade="A";
     var remarks="Good";
 }
 else if(per>=60){
     var Grade="B";
     var remarks="You need to Improve";
 }
 else {
     var Grade="Fail";
     var remarks="Sorry";
 }
 document.write("<h1>Mark Sheet</h1>");
 document.write("<br>Total Marks:"+Total_marks);
 document.write("<br>Obtained Marks:"+obtained_marks);
 document.write("<br>Percentage Marks:"+per+"%");
 document.write("<br>Grade:"+Grade);
 document.write("<br>Remarks:"+remarks);
 
 
 
 //7. Guess game: Store a secret number (ranging from 1 to 10) in a variable. Prompt user to guess the secret number. a. If user guesses the same number, show “Bingo! Correct answer”. b. If the guessed number +1 is the secret number, show “Close enough to the correct answer”. 
 var secret=6;
 var num=+prompt("Enter a number");
 if(num===secret){
     alert("Bingo!Correct answer")
 }
 else if(num+1===secret){
     alert("Close enough to the correct answer!")
 }
 
 
 //8. Write a program to check whether the given number is divisible by 3. Show the message to the user if the number is divisible by 3. 
 var n=+prompt("Enter a number to check:");
 if(n%3===0){
     alert("The no. is divisible by 3")
 }
 else{
     alert("The no. is not divisible by 3")
 }
 
 //9. Write a program that checks whether the given input is an even number or an odd number.  
 
 var no =+prompt("Enter a number to check:");
  
 
 if (no%2===0){
     document.write("<br>the number is even!")
 }
 else{
     document.write("<br>the number is odd!")
 
 }
 
 //10. Write a program that takes temperature as input and shows a message based on following criteria a. T > 40 then “It is too hot outside.” b. T > 30 then “The Weather today is Normal.” c. T > 20 then “Today’s Weather is cool.” d. T > 10 then “OMG! Today’s weather is so Cool.” 
 
 
 var temperature=+prompt("Enter temperature:");
 
 if(temperature>40){
     alert("It is too hot outside")
 }
 else if(temperature>30){
     alert("The Weather today is Normal")
 }
 else if(temperature>20){
     alert("Today’s Weather is cool")
 }
 else if(temperature>10){
     alert("OMG! Today’s weather is so Cool")
 }
 
 
 //11. Write a program to create a calculator for +,-,*, / & % using if statements. Take the following input: a. First number b. Second number c. Operation (+, -, *, /, %) Compute & show the calculated result to user. 
 
 
 var num1=+prompt("Enter first number:");
 var num2=+prompt("Enter Second number:");
 var operator=prompt("Enter operator:");
 var result;
 if(operator==="+"){
     result=num1+num2;
 }
 if(operator==="-"){
     result=num1-num2;
 }
 if(operator==="*"){
     result=num1*num2;
 }
 if(operator==="/"){
     result=num1/num2;
 }
 if(operator==="%"){
     result=num1%num2;
 }
 document.write("<h1>Calculator</h1>");
 document.write("<br>The result is: "+result);
 
//Chapter12-13:
//1. Write a program that takes a character (number or string) in a variable & checks whether the given input is a number, uppercase letter or lower case letter. (Hint: ASCII codes:- A=65, Z=90, a=97, z=122)

var character=prompt("Enter a character to check whether it is string or no:");
var ch=character.charCodeAt();
if (ch>=65 || ch<=90){
    document.write("<br>The character is uppercase!");
}
else if (ch>=97 || ch<=122){
    document.write("<br>The character is lowercase!");
}

else{
    document.write("<br>The character is number!");
}


//2. Write a JavaScript program that accept two integers and display the larger. Also show if the two integers are equal. 

var int1 = +prompt("Enter first integer");
var int2 = +prompt("Enter Second integer");

if(int1>int2){
    document.write("<br>"+int1+" "+"is larger no!");
}
else if(int1<int2){
    document.write("<br>"+int2+" "+"is larger no!");
}
else if(int1===int2){
    document.write("<br>"+int1+" "+"  and  "+int2+" are the same numbers!" );
}


//3. Write a program that takes input a number from user & state whether the number is positive, negative or zero. 

var num=+prompt("Enter a number to check whether its is positive,negative,or zero");

if(num>0){
    document.write("<br>"+num+" "+"is positive no!");
}
else if(num<0){
    document.write("<br>"+num+" "+"is negative no!");
}
else if(num===0){
    document.write("<br>"+num+" "+"is zero !");
}


//4. Write a program that takes a character (i.e. string of length 1) and returns true if it is a vowel, false otherwise

var a=prompt("Enter a character of lenght 1:");
var character_1=a.toLowerCase();


if(character_1==="a" || character_1==="e"|| character_1==="i" || character_1==="o" || character_1==="u" ){
    document.write("<br>True the character is vowel!");
}
else{
    document.write("<br>False the character is not vowel!");
}




//5. Write a program that a. Store correct password in a JS variable. b.  Asks user to enter his/her password c.  Validate the two passwords: i. Check if user has entered password. If not, then give message “ Please enter your password” ii. Check if both passwords are same. If they are same, show message “Correct! The password you entered matches the original password”. Show “Incorrect password” otherwise.   


var password="bush199727";

var pass=prompt("Enter your password");

if(pass===""){
    alert("Please Enter your password!");
}
else if(pass===password){
    alert("Correct!The password you entered matches the original password!");
}
else{
    alert("Incorrect Password!");


}


//6. This if/else statement does not work. Try to fix it: var greeting; var hour = 13; if (hour < 18) { greeting = "Good day"; else greeting = "Good evening"; }   

var greeting; 
var hour = 13; 
if (hour < 18){ 
    greeting = "Good day";
    document.write("<br>"+greeting); 
}    
else{ 
    greeting = "Good evening";
    document.write("<br>"+greeting); 

}   


//7. Write a program that takes time as input from user in 24 hours clock format like: 1900 = 7pm. 
//Implement the following case using if, else & else if statements 

var usertime=+prompt("Enter time in 24hours formate");


if (usertime>=0000 && usertime<1200){
    document.write("<br>GOOD MORNING!"); 
}
else if (usertime>=1200 && usertime<1700){
    document.write("<br>GOOD AFTERNOON!"); 
}
else if (usertime>=1700 && usertime<2100){
    document.write("<br>GOOD EVENING!"); 
}
else if (usertime>=2100 && usertime<2359){
    document.write("<br>GOOD NIGHT!"); 
}
 
//Chaptersfrom14-16:

//1. Declare an empty array using JS literal notation to store student names in future. 

var student_names =[];

//2. Declare an empty array using JS object notation to store student names in future. 

var student_name = new Array();

//3. Declare and initialize a strings array. 
 
var city_names =["Karachi","Islamabad","Lahore","Multan","Hydrabad"];

//4.  Declare and initialize a numbers array.

var Roll_numbers =[101,102,103,104,105];

// 5.  Declare and initialize a boolean array.

// var boolean_array =[True,False];

// 6. Declare and initialize a mixed array. 

var student_details =["Ali",1001,"Karachi","Science"];

//7. Declare and Initialize an array and store available education qualifications in Pakistan (e.g. SSC, HSC, BCS, BS, BCOM, MS, M. Phil., PhD). Show the listed qualifications in your browser like:  

var Qualifications=["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
document.write("<h1>Qualifications<h1>");
document.write("<h2>1)"+Qualifications[0]+"<h2>");
document.write("<h2>2)"+Qualifications[1]+"<h2>");
document.write("<h2>3)"+Qualifications[2]+"<h2>");
document.write("<h2>4)"+Qualifications[3]+"<h2>");
document.write("<h2>5)"+Qualifications[4]+"<h2>");
document.write("<h2>6)"+Qualifications[5]+"<h2>");
document.write("<h2>7)"+Qualifications[6]+"<h2>");
document.write("<h2>8)"+Qualifications[7]+"<h2>");



    


//8. Write a program to store 3 student names in an array.Take another array to store score of these three students. Assume that total marks are 500 for each student, display the scores & percentages of students like:  
 


student_name=["Ali","Ammar","Sana"];
var score=[234,450,300];
var percentage_1=score[0]/500*100;
var percentage_2=score[1]/500*100;
var percentage_3=score[2]/500*100;

document.write("<br>Score of "+student_name[0]+"  is "+score[0]+" .Percenatge:"+percentage_1+"%");
document.write("<br>Score of "+student_name[1]+"  is "+score[1]+" .Percenatge:"+percentage_2+"%");
document.write("<br>Score of "+student_name[2]+"  is "+score[2]+". Percenatge:"+percentage_3+"%");

//9. Initialize an array with color names. Display the array elements in your browser. a. Ask the user what color he/she wants to add to the beginning & add that color to the beginning of the array. Display the updated array in your browser. b. Ask the user what color he/she wants to add to the end & add that color to the end of the array. Display the updated array in your browser. c. Add two more color to the beginning of the array. Display the updated array in your browser. d. Delete the first color in the array. Display the updated array in your browser. e. Delete the last color in the array. Display the updated array in your browser. f. Ask the user at which index he/she wants to add a color & color name. Then add the color to desired position/index. . Display the updated array in your browser. g. Ask the user at which index he/she wants to delete color(s) & how many colors he/she wants to delete. Then 
//remove the same number of color(s) from user-defined position/index. . Display the updated array in your browser.


//a. Ask the user what color he/she wants to add to the beginning & add that color to the beginning of the array. Display the updated array in your browser. 
var color=prompt("Enter a color you want to add in list");
var color_list=[];


color_list.unshift(color)
document.write("<br>"+color_list[0]);

//b. Ask the user what color he/she wants to add to the end & add that color to the end of the array. Display the updated array in your browser. 

var color1=prompt("Enter a color you want to add in the end of the list");



color_list.push(color1)
document.write("<br>"+color_list[1]);



//c. Add two more color to the beginning of the array. Display the updated array in your browser. 

color_list.unshift("brown","red");

document.write("<h1>Updated array</h1>");

document.write("<br><h3>"+color_list+"</h3>");


//d. Delete the first color in the array. Display the updated array in your browser. 

color_list.shift();
document.write("<h1>Updated array after Deleting first Color</h1>");

document.write("<br><h3>"+color_list+"</h3>");

//e. Delete the last color in the array. Display the updated array in your browser.
color_list.pop();
document.write("<h1>Updated array after Deleting Last Color</h1>");

document.write("<br><h3>"+color_list+"</h3>");

//f. Ask the user at which index he/she wants to add a color & color name. Then add the color to desired position/index. . Display the updated array in your browser. 

var insert_color=prompt("which color you want to insert in list");
var index_color=+prompt("Tell me place where you wanna add the desied color");

color_list.splice(index_color,index_color-1,insert_color);

document.write("<h1>Updated array after insert new Color</h1>");

document.write("<br><h3>"+color_list+"</h3>");

//g. Ask the user at which index he/she wants to delete color(s) & how many colors he/she wants to delete. Then 
//remove the same number of color(s) from user-defined position/index. . Display the updated array in your browser. 

var del_color=+prompt("At which index you want to delete color(s) from the list:");
var ind_del=+prompt("How many colors you want to delele from the list!");
color_list.splice(del_color,index_color);
document.write("<h1>Updated array after removing Colors</h1>");

document.write("<br><h3>"+color_list+"</h3>");



//Write a program to store student scores in an array & sort the array in ascending order using Array’s sort method. 

var score=[23,45,56,24,34];
document.write("<br><h3>Score of Students:"+score+"</h3>");
var score1=score.sort()

document.write("<br><h3>Ordered Score of Studenrs:"+score1+"</h3>");


//11. Write a program to initialize an array with city names. Copy 3 array elements from cities array to selectedCities array

var city_names=["Karachi","Lahore","Faisalabad","Hyderabad","Peshawar"];
document.write("<h1>Cities List</h1>")
document.write("<br><h3>"+city_names+"</h3>");
var Selected_cities=city_names.slice(1,4);
document.write("<h1>Selected Cities List</h1>")
document.write("<br><h3>"+Selected_cities+"</h3>");

//12.  Write a program to create a single string from the below mentioned array: var arr = [“This ”, “ is ”, “ my ”, “ cat”]; (Use array’s join method) 
 
var arr =["This","is","my","cat"];
document.write("<br><h1>Array</h1>");
document.write(arr);
var sen=arr.join(" ");

document.write("<br><h1>String</h1>");
document.write("<h3>"+sen+"</h3>");

//13. Create a new array. Store values one by one in such a way that you can access the values in the order in which they were stored. (FIFO-First In First Out) 

var devices =["keyboard","mouse","printer","moniter"];
document.write("<h1>Devices:</h1>");
document.write("<h3>"+devices+"</h3>")


document.write("<br><h1>Out:</h1>");
document.write("<h2>"+devices.shift()+"</h2>");

document.write("<h1>Out:</h1>");
document.write("<h2>"+devices.shift()+"</h2>");

document.write("<h1>Out:</h1>");
document.write("<h2>"+devices.shift()+"</h2>");

document.write("<h1>Out:</h1>");
document.write("<h2>"+devices.shift()+"</h2>");


//14. Create a new array. Store values one by one in such a way that you can access the values in reverse order. (Last InFirst Out) 
 
var devices_1 =["keyboard","mouse","printer","moniter"];
document.write("<h1>Devices:</h1>");
document.write("<h3>"+devices_1+"</h3>")

document.write("<br><h1>Out:</h1>");
document.write("<h2>"+devices_1.pop()+"</h2>");

document.write("<h1>Out:</h1>");
document.write("<h2>"+devices_1.pop()+"</h2>");

document.write("<h1>Out:</h1>");
document.write("<h2>"+devices_1.pop()+"</h2>");

document.write("<h1>Out:</h1>");
document.write("<h2>"+devices_1.pop()+"</h2>"); 

//15. Write a program to store phone manufacturers (Apple, Samsung, Motorola, Nokia, Sony & Haier) in an array. Display the following dropdown/select menu in your browser using document.write() method: 

var Phone_manufacturers=["Apple", "Samsung", "Motorola", "Nokia", "Sony" , "Haier"];
document.write("<h1>Phone_manufacturers<h1>");
document.write("<h2>"+Phone_manufacturers[0]+"<h2>");
document.write("<h2>"+Phone_manufacturers[1]+"<h2>");
document.write("<h2>"+Phone_manufacturers[2]+"<h2>");
document.write("<h2>"+Phone_manufacturers[3]+"<h2>");
document.write("<h2>"+Phone_manufacturers[4]+"<h2>");
document.write("<h2>"+Phone_manufacturers[5]+"<h2>");

//Chapter 17-20:

//1. Declare and initialize an empty multidimensional array. (Array of arrays)  

var multi_array=[[],[],[]];


//2. Declare and initialize a multidimensional array representing the following matrix:  
 
multi_array=[[0,1,2,3],[1,0,1,2],[2,1,0,1]];
for(var i=0;i<multi_array.length;i++){
    document.write("<br>"+multi_array[i]);
}


//3. Write a program to print numeric counting from 1 to 10. 

for( var i=1;i<=10;i++){
    document.write("<br><h2>"+i+"</h2>");
}

//4.  Write a program to print multiplication table of any number using for loop. Table number & length should be taken as an input from user. 

var table=+prompt("Enter a number to show its multiplication table");
var length_table=+prompt("Enter lenght of multiplication table ");
alert(table);
alert(length_table);

document.write("<br><h2>Multiplication Table of "+table+"</h2>");
document.write("<br><h2>Lenght of table:"+length_table+"</h2>");

for( var i=1;i<=length_table;i++){
    document.write("<br>"+table+" * "+i+" = "+table*i);

}


//5. Write a program to print items of the following array using for loop: fruits = [“apple”, “banana”, “mango”, “orange”, “strawberry”

var fruits= ["apple", "banana", "mango", "orange", "strawberry"];

for (var i=0;i<fruits.length;i++ ){
    document.write("<br>"+fruits[i]);
}

for (var i=0;i<fruits.length;i++ ){
    document.write("<br>Element at "+i+"is "+fruits[i]);
}


//6. Generate the following series in your browser. See example output. a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20 d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19 e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k 

//a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 
document.write("<h2>Counting:</h2>")
for(var i=1;i<=15;i++){
    document.write(i+",");
}
//b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 
document.write("<h2> Reverse Counting:</h2>")
for(var i=10;i>=1;i--){
    document.write(i+",");
}
//c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20 
document.write("<h2>Even:</h2>")
for(var i=0;i<=20;i++){
    if(i%2===0){
        document.write(i+",");
    }
   
}
//d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19 
document.write("<h2>Odd:</h2>")
for(var i=1;i<=20;i++){
    if(i%2!==0){
        document.write(i+",");
    }
    
}
//e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k
document.write("<h2>Series:</h2>")
for(var i=2;i<=20;i++){
    if(i%2===0){
        document.write(i+"k,");
    }
    
}


//7. You have an array A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”] Write a program to enable “search by user input” in an array. After searching, prompt the user whether the given item is found in the list or not. Example: 

var A=["cake","apple pie","cookie","chips","patties"];

var order=prompt("Welcome to ABC Bakery,What do you want to order sir/madam");


if(A.includes(order)){
    alert(order+"is available at index "+A.indexOf(order)+" in our bakery.");
}
else{
    alert("We are sorry. "+order+"is not  available in our bakery.");
}

//8. Write a program to identify the largest number in the given array. A = [24, 53, 78, 91, 12]. 

var num=[24,53,78,91,12];
document.write("<br><h3>Array items:"+num+"</h3>");


var largest_no=Math.max(...num);
document.write("<br><h3>Largest no is:"+largest_no+"</h3>");






//9. Write a program to identify the smallest number in the given array. A = [24, 53, 78, 91, 12] 


var num=[24,53,78,91,12];
document.write("<br><h3>Array items:"+num+"</h3>");


var smallest_no=Math.min(...num);
document.write("<br><h3>Smallest no is:"+smallest_no+"</h3>");

//10. Write a program to print multiples of 5 ranging 1 to 100.
document.write("<br><h3>Multiple of 5:</h3>");
for(var i=5;i<=100;i++){
    if(i%5===0){
        document.write(i+",");
    }
   
}







