window.addEventListener("load", addListener);
var sum,quotient,product,difference;
function addListener()
{
    document.getElementById("btnAdd").addEventListener("click", Addition);
    document.getElementById("btnDivide").addEventListener("click", Division);
    document.getElementById("btnSubtract").addEventListener("click", Subtraction);
    document.getElementById("btnMultiply").addEventListener("click", Multiplication);
    document.getElementById("btnClear").addEventListener("click", ClearInputs);
}

function Addition()
{
    First_Number = document.getElementById("inputnum1").value;
    Second_Number = document.getElementById("inputnum2").value;
    if(First_Number == '' || Second_Number == '')
    {
        alert("Either the first number of the second number is empty, please fill in the input")
    }
    else
    {
        sum = Number(First_Number) + Number(Second_Number);
        document.getElementById("lblresult").textContent = "Result: " + sum;
    }
}

function Division()
{
    First_Number = document.getElementById("inputnum1").value;
    Second_Number = document.getElementById("inputnum2").value;
    if(First_Number == '' || Second_Number == '')
        {
            alert("Either the first number of the second number is empty, please fill in the input")
        }
    else
        {
            quotient = Number(First_Number) / Number(Second_Number);
            document.getElementById("lblresult").textContent = "Result: " + quotient;
        }
}

function Multiplication()
{
    First_Number = document.getElementById("inputnum1").value;
    Second_Number = document.getElementById("inputnum2").value;
    if(First_Number == '' || Second_Number == '')
        {
            alert("Either the first number of the second number is empty, please fill in the input")
        }
    else
        {
            product = Number(First_Number) * Number(Second_Number);
            document.getElementById("lblresult").textContent = "Result: " + product;
        }
}

function Subtraction()
{
    First_Number = document.getElementById("inputnum1").value;
    Second_Number = document.getElementById("inputnum2").value;
    if(First_Number == '' || Second_Number == '')
        {
            alert("Either the first number of the second number is empty, please fill in the input")
        }
    else
        {
            difference = Number(First_Number) - Number(Second_Number);
            document.getElementById("lblresult").textContent = "Result: " + difference;
        }
}

function ClearInputs()
{
    document.getElementById("inputnum1").value = "";
    document.getElementById("inputnum2").value = "";
}
