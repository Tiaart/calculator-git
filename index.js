
let arrayButtons = [
{
    button: document.querySelector("#button1"),
    value: document.querySelector("#button1").value,
},

{
    button: document.querySelector("#button2"),
    value: document.querySelector("#button2").value, 
},

{
    button: document.querySelector("#button3"),
    value: document.querySelector("#button3").value,
},

{
    button: document.querySelector("#button4"),
    value: document.querySelector("#button4").value,
},

{
    button: document.querySelector("#button5"),
    value: document.querySelector("#button5").value,
},

{
    button: document.querySelector("#button6"),
    value: document.querySelector("#button6").value,
},

{
    button: document.querySelector("#button7"),
    value: document.querySelector("#button7").value,
},

{
    button: document.querySelector("#button8"),
    value: document.querySelector("#button8").value,
},

{
    button: document.querySelector("#button9"),
    value: document.querySelector("#button9").value,
},

{
    button: document.querySelector("#button0"),
    value: document.querySelector("#button0").value,  
},

{
    button: document.querySelector("#buttonplus"),
    value: document.querySelector("#buttonplus").value,
},

{
    button: document.querySelector("#buttonminus"),
    value: document.querySelector("#buttonminus").value,
},

{
    button: document.querySelector("#button_division"),
    value: document.querySelector("#button_division").value,
},

{
    button: document.querySelector("#button_multiplic"),
    value: document.querySelector("#button_multiplic").value,
},

{
    button: document.querySelector("#button_dot"),
    value: document.querySelector("#button_dot").value,
},


]


arrayButtons.forEach((item) => {
    item.button.addEventListener("click", out)
})
document.querySelector("#buttonC").addEventListener("click", clean);
document.querySelector("#button_equal").addEventListener("click", equal);

function out(e) {
    document.querySelector("#operation").innerHTML += e.target.innerHTML;
}

function clean(e) {
    document.querySelector("#operation").innerHTML = " ";
    document.querySelector("#operation_result").innerHTML = " ";
}

function equal(e) {
    document.querySelector("#operation_result").innerHTML = eval(document.querySelector("#operation").innerHTML);
}



