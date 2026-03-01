let display = document.getElementById("display");
let historyList = document.getElementById("historyList");
function appendValue(value) 
{
    display.value += value;
}
function clearDisplay() 
{
    display.value = "";
}
function backspace() 
{
    display.value = display.value.slice(0, -1);
}
function calculate() 
{
    try 
    {
        let expression = display.value;
        expression = expression.replace(/\^/g, "**");
        let result = Function('"use strict"; return (' + expression + ')')();
        addToHistory(display.value + " = " + result);
        display.value = result;
    }
     catch
     {
        display.value = "Error";
    }
}
function addToHistory(entry)
{
    let li = document.createElement("li");
    li.textContent = entry;
    historyList.prepend(li);
}
function toggleTheme() 
{
    document.body.classList.toggle("light");
}
/* Keyboard Support */
document.addEventListener("keydown", function(e) 
{
    if (!isNaN(e.key) || "+-*/().".includes(e.key)) 
        {
        appendValue(e.key);
    }
    if (e.key === "Enter") calculate();
    if (e.key === "Backspace") backspace();
});