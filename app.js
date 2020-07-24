//==============================CHAPTER 38-67=====================================



//CHAPTER 38-42
//1. Write a custom function power ( a, b ), to calculate the value of a raised to b. 

function power(a,b){
    result=a**b
    return result
}
console.log(power(2,4))

//2. Any year is entered through the keyboard. Write a function to determine whether the year is a leap year or not. 

year=+prompt("enter a year to check whether it is leap year or not")
function leapyear(year){
    if(year%2===0){
        console.log("the year you entered is leap year")
    }
    else{
        console.log("The year you entered is not a leap year")

    }
}
leapyear(year)

//3. If the lengths of the sides of a triangle are denoted by a, b, and c, then area of triangle is given by
//area = S(S − a)(S − b)(S − c)
//where, S = ( a + b + c ) / 2
//Calculate area of triangle using 2 functions
a=+prompt("Enter first side of triangle:");
b=+prompt("Enter second side of triangle:");
c=+prompt("Enter third side of triangle:");


function func1(a,b,c){
    var s=(a+b+c)/2
    var area=Math.sqrt((s*(s-a)*(s-b)*(s-c)))
    return area;
}



function area_of_traingle(){
    var area_tri=func1(a,b,c);
    console.log("Area of Triangle:"+Math.round(area_tri));

}

area_of_traingle();

//4. Write a function that receives marks received by a student in 3 subjects and returns the average and percentage of these marks. there should be 3 functions one is the mainFunction and other are for average and percentage. Call those functions from mainFunction and display result in mainFunction. 
sub1=+prompt("Enter marks of subject 1:");
sub2=+prompt("Enter marks of subject 2:");
sub3=+prompt("Enter marks of subject 3:");

function average(sub1,sub2,sub3){
    var result=(sub1+sub2+sub3)/3;
    return Math.round(result);
}

function percentage(sub1,sub2,sub3){
    var result=(sub1+sub2+sub3)/300*100;
    return Math.round(result);
}

function mainFunction(){
    av=average(sub1,sub2,sub3);
    per=percentage(sub1,sub2,sub3);
    console.log("The average of marks is:"+av);
    console.log("Percentage:"+per+"%");

}
mainFunction();


//5. You have learned the function indexOf. Code your own custom function that will perform the same functionality. You can code for single character as of now. 


var arr=["a","b","c"];


function index(arr,value){
    for (let i = 0; i < arr.length; i++)  {
        if(arr[i] ===value){
            return i;
        }
    }
}
console.log(index(arr,"b"));

//6. Write a function to delete all vowels from a sentence. Assume that the sentence is not more than 25 characters long. 


function disemvowel(str) {             
    let newString = " ";                            
    for (let i = 0; i < str.length; i++)  
{           
      if (str[i] != "a" && str[i] != "e" && str[i] != "i" && str[i] != "o" && str[i] != "u")                                   
       {           
       newString += str[i];         
      };   
    };   
    return newString;   
  };  
  console.log(disemvowel('Hello my name is Billgate'));


//7. Write a function with switch statement to count the number of occurrences of any two vowels in succession in a line of text. 

function findOccurrences() {
    var str = "Pleases read this application and give me gratuity";
    var count = 0;
    let haveSeenVowel = false;
  
    for (const letter of str.toLowerCase()) {
      switch (letter) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
          {
            if (haveSeenVowel) {
              count++;
              haveSeenVowel = false;
            } else {
              haveSeenVowel = true;
            }
            break;
          }
        default:
          haveSeenVowel = false
      }
    }
  
    return count
  }
  
  console.log(findOccurrences());

//8. The distance between two cities (in km.) is input through the keyboard. Write four functions to convert and print this distance in meters, feet, inches and centimeters. 
 
var distance = prompt("Enter the distance between two cities ");

function meter(distance){
    return distance*1000
}
console.log(meter(distance));

function feet(distance){
    return distance*3.2808
}
console.log(feet(distance));

function inches(distance){
    return distance*39.370
}
console.log(inches(distance));

function centimeter(distance){
    return distance/0.01
}
console.log(centimeter(distance));

//9.Write a program to calculate overtime pay of employees. Overtime is paid at the rate of Rs. 12.00 per hour for every hour worked above 40 hours. Assume that employees do not work for fractional part of an hour. 
 
var hours =+prompt("Enter your working hours");

function overtime(hours){
    if(hours>40)
        {
            over_time = hours - 40;
            over_time_pay = over_time * 12.00;
            console.log("Employee overtime pay is", over_time_pay);
        }
        else
            console.log("You have to work for more than 40 hours to get over time pay\n");
}

overtime(hours);

//10.A cashier has currency notes of denominations 10, 50 and 100. If the amount to be withdrawn is input through the keyboard in hundreds, find the total number of currency notes of each denomination the cashier will have to give to the withdrawer. 
var withdraw=+prompt("Enter amount to withdraw")
findingnotes(withdraw);

function findingnotes(x){
    var hundred;
    var fifty;
    var ten;
    var q=Math.floor(x/100);
    var r=Math.floor(x%100);
    hundred=q;
    if(r>50){
        fifty=Math.floor(r/50);
        ten=Math.floor((r-50)/10);
        alert("You will have "+ hundred+ "hundred notes " +fifty+ "fifty notes "+ten+ "ten notes");
        
    }

    
    
}
//Chapter 43-48;

//3. Display 10 student records in table and each row should contain a delete button. If you click on a button to delete a record, entire row should be deleted.  

function table()
    { 
        
        document.getElementsByTagName("tr")[2].remove(); 
        


    } 
    function table1()
    { 
        
        document.getElementsByTagName("tr")[0].remove(); 
        


    } 
    function table2()
    { 
        
        document.getElementsByTagName("tr")[1].remove(); 
        


    } 
    function table3()
    { 
        
        document.getElementsByTagName("tr")[3].remove(); 
        


    } function table4()
    { 
        
        document.getElementsByTagName("tr")[4].remove(); 
        


    }     

    function table5()
    { 
        
        document.getElementsByTagName("tr")[5].remove(); 
        


    } function table6()
    { 
        
        document.getElementsByTagName("tr")[6].remove(); 
        


    } function table7()
    { 
        
        document.getElementsByTagName("tr")[7].remove(); 
        


    } function table8()
    { 
        
        document.getElementsByTagName("tr")[8].remove(); 
        


    } 
    function table9()
    { 
        
        document.getElementsByTagName("tr")[9].remove(); 
        


    } 


    function displaydata(){
        var email=document.getElementById("mail").value;
        document.write("<br>Email:"+email);
        var password=document.getElementById("pass").value;
        document.write("<br>Password:"+password);
        
    }

//5. Show a counter in browser. Counter should increase on click on increase
//button and decrease on click on decrease button. And show updated counter
//value in browser.



var x = 0;

document.getElementById('output-area').innerHTML = x;

function button1() {
 document.getElementById('output-area').innerHTML = ++x;
}

function button2() {
      document.getElementById('output-area').innerHTML = --x;}



//chapter 49-52
//2. Suppose in your webpage there is content area in which you have entered your item details, but user can only se some details on first look. When user clicks on “Readmore” button, full detail of that particular item will be
//displayed. 
function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  
//3. In previous assignment you have created a tabular data using javascript. Let’s modify that. Create a form which
//takes student’s details and show each student detail in table. Each row of table must contain a delete button an an edit button. On click on delete button entire row should be deleted. On click on edit button, a hidden form will appear with the values of that row.

function addstudent(){
    var name=document.getElementById("name").value;
    
    var rollnumber=document.getElementById("rollnum").value;
    
    var cls=document.getElementById("class").value;
   
    var newRow = lst.insertRow(lst.length)
    cell1 = newRow.insertCell(0);
    cell2 = newRow.insertCell(1);
    cell3 = newRow.insertCell(2);
    cell4 = newRow.insertCell(3);
    cell5 = newRow.insertCell(4);

    
    cell1.innerHTML = name;
    cell2.innerHTML = rollnumber;
    cell3.innerHTML = cls;
    cell4.innerHTML ="<a onClick='onDelete(this)'>Delete</a>";
    cell5.innerHTML="<a onClick='onEdit(this)'>Edit</a>";
    resetForm();


             

}
function resetForm() {
    document.getElementById("name").value = "";
    document.getElementById("rollnum").value = "";
    document.getElementById("class").value = "";
    
  
}
function onDelete(e){
    //e.parentNodes.remove()
    e.parentNode.parentNode.remove();
    
}

    function onEdit(td) {
        selectedRow = td.parentElement.parentElement;
        document.getElementById("name").value = selectedRow.cells[0].innerHTML;
        document.getElementById("rollnum").value = selectedRow.cells[1].innerHTML;
        document.getElementById("class").value = selectedRow.cells[2].innerHTML;
        
    }

var lst=document.getElementById("studentlist");

                    
                
//chap 53-58     
//1.Creata paragraph and two button zoom in and zoom out On each click on zomm in button add 10 px in font size 
//and on each click on zoom out button decrease font size by 10px.

var i=document.getElementById("p1");
var k =i.style.fontSize

function big() {
    
   var font= document.getElementById("p1").style.fontsize;
   font++;
    
    }
}

    
function small() {
    
    document.getElementById("p1").style.fontSize = k + "10px";

    }

//2.show image in model by clicking on it.

function showimage(img){
    console.log(img.src);
    var modalimg=document.getElementById("modalimage");
    modalimg.src=img.src;

}


//chapters 59 to 67:

//1. Consider you have following code snippet:


var m= document.getElementById("main-content");
console.log(m.childNodes[0]);
console.log(m.childNodes[1]);
console.log(m.childNodes[2]);
console.log(m.childNodes[3]);
console.log(m.childNodes[4]);
console.log(m.childNodes[5]);
console.log(m.childNodes[6]);
console.log(m.childNodes[7]);
console.log(m.childNodes[8]);
console.log(m.childNodes[9]);


var a =document.getElementsByClassName("render");
console.log(a);
document.write("<br>"+a[0].innerHTML);
document.write("<br>"+a[1].innerHTML);
document.write("<br>"+a[2].innerHTML);
document.write("<br>"+a[3].innerHTML);
document.write("<br>"+a[4].innerHTML);



var firstname=document.getElementById("firstname");
firstname.innerHTML="First Name : Bill";
var lstname=document.getElementById("lastName");
lstname.innerHTML="Last Name: Gates";
var emailid=document.getElementById("emailid");
emailid.innerHTML="Email : billgate456@yahoo.com";

//2. use HTML code of question 1 and show the result on browser.

var nodetyope = document.getElementById("form-content");

console.log(nodetyope.nodeType);
console.log(lstname.nodeType);


var first = m.firstChild;
console.log("First child:"+first)
var last = m.lastChild;
console.log("Last child:"+last)

var n=document.getElementById("lastName");
var ne=n.nextSibling;
var pre=n.previousSibling;

console.log(pre);
console.log(ne);


var mail=document.getElementById("emailid");
var parent=mail.parentNode;

console.log(parent);
console.log(parent.nodeType);
