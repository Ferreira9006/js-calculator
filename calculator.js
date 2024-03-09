const display = document.getElementById("display");
const errorMessage = "Error";

function appendToDisplay(input)
{
    if (display.value != "Error")
    {
        display.value += input;
    }
    else
    {
        clearDisplay();
        display.value += input;
    }
    
}

function clearDisplay()
{
    display.value = "";
}

function calculate()
{
    try 
    {
        display.value = eval(display.value);
    }
    catch(error)
    {
        display.value = errorMessage;
    }
    
}