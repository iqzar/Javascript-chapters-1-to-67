



//3

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

                    
                
                
             
               