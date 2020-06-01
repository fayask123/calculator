function buttonclick(val)
{
    document.getElementById("screen").value=document.getElementById("screen").value+val;
}

function clearDisplay()
{
     document.getElementById("screen").value=""
}


function ans()
{
   var game=document.getElementById("screen").value
     var fayas=eval(game)
     document.getElementById("screen").value=fayas
     }
$dddd