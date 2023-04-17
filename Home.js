// To Add Cancel For each List Item.

var myNodeList = document.getElementsByTagName("li");
for(var i = 0; i<myNodeList.length; i++)
{
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("cancel");
    span.className="close";
    span.appendChild(txt);
    myNodeList[i].appendChild(span);

}

// To Close The List By Selecting Through Click
var close =document.getElementsByClassName("close");
for( var i = 0; i<close.length; i++)
{
    close[i].onclick=function()
    {
        var div = this.parentElement;
        div.style.display = "none";
    }
}

function newElement()
{
    var li = document.createElement("li");
    var input = document.getElementById("myInput").value;
    var text = document.createTextNode(input);
    li.appendChild(text);
    if(input==='')
    {
        alert("Please Enter Something");
    }
    else
    {
        document.getElementById("myList").appendChild(li);
    }
    // To Clear The TextField Again 
    document.getElementById("myInput").value="";
    
    // Same Cancel Button To Remove From The List
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("cancel");
    span.className="close";
    span.appendChild(txt);
    li.appendChild(span);
   
    //Function of Close (Span) To Delete
    var close =document.getElementsByClassName("close");
    for( var i = 0; i<close.length; i++)
    {
        close[i].onclick=function()
        {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}


// To Cross the Name From The List

var list = document.querySelector('ul');
list.addEventListener('click', function(event) {
  if (event.target.tagName === 'LI') {
    event.target.classList.toggle('checked');
  }
}, false);


// Expriment Enter Button

var inp = document.getElementById("myInput");
inp.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) 
    {
        event.preventDefault();
        document.getElementById("Add").click();
    }
});
