value = document.getElementById('value');
increase = document.getElementById('increase');
reset = document.getElementById('reset');
decrease = document.getElementById('decrease');
let count = 0;

increase.addEventListener('click', () => {
    value.innerHTML = ++count;
    if (count > 0) value.style.color = "green";
    else if (count < 0) value.style.color = "red";
    else { value.style.color = "black"; }
})
decrease.addEventListener('click', () => {
    value.innerHTML = --count;
    if (count > 0) value.style.color = "green";
    else if (count < 0) value.style.color = "red";
    else { value.style.color = "black"; }
})
reset.addEventListener('click', () => {
    count = 0
    value.innerHTML = count;
    value.style.color = "black";
})

