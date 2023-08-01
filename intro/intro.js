let number = 0;
    let hex = "#fffff";
function frogs()
{
    
    let result = hex.concat(number);
    number ++;
    console.log("*gives you a frog*");
    const mytext = document.getElementById("terrariam");
    mytext.innerHTML += bgcolor.value.concat(` frog <br>`);
    mytext.className = `myclass`;
    const body = document.body;
   body.style.backgroundColor = bgcolor.value;
   console.log(number);
   console.log(result);
}
function noFrogs()
{
    const body = document.body;
    const mytext = document.getElementById("terrariam");
    mytext.innerHTML = ` `;
    console.log("*takes your frogs*");
    
    body.style = `background-color: hotpink`;
}